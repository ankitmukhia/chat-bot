"use server";

import { signIn } from "@/auth"
import { EmailPasswordValidationSchema } from "@/lib/types";
import { getUser } from "@/lib/utils"
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { ResultCode } from "@/lib/utils";
import { AuthError } from "next-auth";

interface Result {
	type: string;
	resultCode: any
}

export async function createUser(
	email: string,
	hashPassword: any,
) {
	const existingUser = await getUser(email);

	if (existingUser !== null) {
		return {
			type: 'error',
			resultCode: ResultCode.UserAlreadyExists
		}
	} else {
		await db.user.create({
			data: {
				email,
				password: hashPassword
			}
		});

		return {
			type: 'success',
			resultCode: ResultCode.UserCreated
		}
	}
}
export const signup = async (_prevState: Result | undefined, formData: FormData): Promise<any> => {
	const email = formData.get("email") as string
	const password = formData.get("password") as string

	const { success } = EmailPasswordValidationSchema.safeParse({ email, password })

	if (success) {
		const salt = 10;
		const hashPassword = await bcrypt.hash(password, salt);

		try {
			const result = await createUser(email, hashPassword);

			if (result.resultCode === ResultCode.UserCreated) {
				await signIn("credentials", {
					email,
					password,
					redirect: false
				});
			}
			return result;
		} catch (error) {
			if (error instanceof AuthError) {
				switch (error.type) {
					case 'CredentialsSignin':
						return {
							type: 'error',
							resultCode: ResultCode.InvalidCredentials
						}
					default:
						return {
							type: 'error',
							resultCode: ResultCode.UnknownError
						}
				}
			} else {
				return {
					type: 'error',
					resultCode: ResultCode.UnknownError
				}
			}
		}
	} else {
		return {
			type: "error",
			resultCode: ResultCode.InvalidCredentials
		}
	}
}

