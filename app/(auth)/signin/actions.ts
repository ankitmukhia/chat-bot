"use server";

import { signIn } from "@/auth";
import { db } from "@/lib/db"

interface Result {
	type: string;
	resultCode: any;
}

export const getUser = async (email: string) => {
	const user = await db.user.findUnique({
		where: {
			email
		}
	});
	return user;
}

export const login = async () => {

}
