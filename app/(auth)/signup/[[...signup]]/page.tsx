import SignupForm from "@/components/signup-form";
import { SocialButton } from "@/components/ui/social"
import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function Signup() {
  const session = await auth()

  if (session) {
    redirect('/')
  }

  return <div className="flex flex-col p-4">
    <div className="flex flex-col items-center gap-4 space-y-3">
      <div className="w-full flex-1 rounded-lg border border-gray-700/50 bg-white px-6 pb-4 pt-8 shadow-md md:w-96 dark:bg-zinc-950">
        <h1 className="mb-3 text-2xl font-bold">Signup for an account!</h1>
        <SocialButton />
        <div className="w-full flex flex-row justify-center mt-5 items-center">
          <hr className="w-full border border-gray-700/50" />
          <p className="text-sm font-medium leading-4 px-2.5 text-gray-400">OR</p>
          <hr className="w-full border border-gray-700/50" />
        </div>
        <SignupForm />
      </div>
    </div>
  </div>
}
