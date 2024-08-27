import { auth } from "@/auth";
export default async function Page() {
  const session = await auth();

  if (!session) {
    return <div>Not authorized</div>
  }

  return <div>

  </div>
}
