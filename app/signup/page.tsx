import { redirect } from "next/navigation";
import SignupForm from "@/components/signup-form";

export default function Signup() {
  const session = false;

  if (session) {
    redirect("/")
  }

  return <div className="flex flex-col p-4">
    <SignupForm />
  </div>
}
