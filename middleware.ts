export { auth } from "@/auth"

import { auth } from "@/auth"

export default auth((req) => {
  console.log("REACT : ", req.nextUrl.pathname)
})

/* middle ware will be invoked for every route in yout project expect below mather, which are static webp etc */
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
