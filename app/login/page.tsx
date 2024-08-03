import { redirect } from 'next/navigation';
import LoginForm from '@/components/login-form';

export default function Login() {
  const session = false;

  if (session) {
    redirect("/");
  };

  return <main className="flex flex-col p-4">
    <LoginForm />
  </main>
}
