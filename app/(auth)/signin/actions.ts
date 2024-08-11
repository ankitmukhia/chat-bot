"use server";

import { signIn } from "@/auth";
import { ResultCode } from "@/lib/utils"
import { AuthError } from "next-auth";
import z from "zod"

interface Result {
	type: string;
	resultCode: any;
}

export const login = async (_prevState: Result | undefined, formData: FormData): Promise<any> => {
	try {
		const email = formData.get('email') as string
		const password = formData.get('password') as string

		const parsedCredentials = z
			.object({
				email: z.string().email(),
				password: z.string()
			})
			.safeParse({
				email,
				password
			})

		if (parsedCredentials.success) {
			await signIn('credentials', {
				email,
				password,
				redirect: false
			})

			return {
				type: 'success',
				resultCode: ResultCode.UserLoggedIn
			}
		} else {
			return {
				type: 'error',
				resultCode: ResultCode.InvalidCredentials
			}
		}
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return {
						type: "error",
						resultCode: ResultCode.InvalidCredentials
					}
				default:
					return {
						type: "error",
						resultCode: ResultCode.UnknownError
					}
			}
		}
	}
}
