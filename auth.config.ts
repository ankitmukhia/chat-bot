import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"

export default {
  providers: [Google],
  pages: {

  },
  callbacks: {

  }
} satisfies NextAuthConfig

/* to mantain session, if we use ORM's like prisma, which is not fully compatable with edge, can be problematic, coz it needs db access. So that why we use JWT's that stores session information on client side. The data is embeded in the token itself, there is not need of db access */

/* so auth.config.ts is a configuration file for authentation, where you define like custome pages, callbacks, providers etc. We doesn't initilize NextAuth() in this file. As we can see this configrations dosen't relay on specific adapter like => Prisma adapter allows auth.js to interact with prisma db */
