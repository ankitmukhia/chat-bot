import authConfig from "./auth.config"
import NextAuth from "next-auth";

/* in this approch we are redirecting user with the emediate refresh */
export default NextAuth(authConfig).auth;

/* middleware will be invoked for every route in yout project expect below mather, which are static, webp, etc */
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

/* Middleware works at the edge, between a user's request and server's response. */
/* you should not use Prisma directly in Next'js middleware coz it's not fully edge-compatible */

/* So we are using the Prisma adapter for authentication, but not for middleware, right? The auth.config.ts file is useful for both because it doesn’t specifically include Prisma or any other ORM. It only contains settings and configurations, so we can use it as needed with minor adjustments. */
