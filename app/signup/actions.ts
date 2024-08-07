import { signIn } from "@/auth"

export const signup = async (formData: FormData) => {
	await signIn("google")
}
