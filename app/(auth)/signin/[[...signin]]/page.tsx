import LoginForm from '@/components/login-form';
import { auth } from "@/auth";
import { redirect } from "next/navigation"

export default async function Login() {
  const session = await auth()

  if (session) {
    redirect('/')
  }

  return (
    <main className="flex flex-col p-4">
      <LoginForm />
    </main>
  )
}
