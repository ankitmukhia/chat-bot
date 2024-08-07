import { redirect } from "next/navigation";
import SignupForm from "@/components/signup-form";

export default async function Signup() {

  return <div className="flex flex-col p-4">
    <SignupForm />
  </div>
}
