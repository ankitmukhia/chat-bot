import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from "@/lib/db";

/* :: Edge compatibility. Prisma is designed to work on regular server(which is the central sever far away), not these edge servers(small, super-fast that are close to the user). */
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig
})
