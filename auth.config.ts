import type { NextAuthConfig } from "next-auth";
import z from "zod";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials"
import { EmailPasswordValidationSchema } from "@/lib/types"
import { getUser } from "@/app/(auth)/signin/actions"

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateCredentials = z.object({
          email: z.string().email(),
          password: z.string(),
        })
          .safeParse(credentials)

        if (validateCredentials.success) {
          const { email, password } = validateCredentials.data;

          const User = await getUser(email)

          if (!User) null;

          const passwordMatch = await bcrypt.compare(password, User.password)
          console.log("Matched Password : ", passwordMatch)

          if (passwordMatch) return User;
        }

        return null
      }
    })
  ],
  pages: {
    "signIn": "/signin",
    "newUser": "/signup"
  },
} satisfies NextAuthConfig

/* to mantain session, if we use ORM's like prisma, which is not fully compatable with edge, can be problematic, coz it needs db access. So that why we use JWT's that stores session information on client side. The data is embeded in the token itself, there is not need of db access */

/* so auth.config.ts is a configuration file for authentation, where you define like custome pages, callbacks, providers etc. We doesn't initilize NextAuth() in this file. As we can see this configrations dosen't relay on specific adapter like => Prisma adapter allows auth.js to interact with prisma db */
