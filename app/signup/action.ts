"use server";
import { client as db } from "@/lib/db"

export const signup = async () => {

	await db.hSet('user', {
		email: "John@gmail.com",
		password: "johnpassword",
	})
};
