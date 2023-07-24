import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/allProducts" ,"/productDetails/:path","/category/:path", "/api/cart/:path*", "/api/webhook/:path*", "/studio/:path*"],
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/","/api/cart/:path*","/cartPage", "/(api|trpc)(.*)","/studio/:path*"],
};


// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   publicRoutes: ["/", "/products" ,"/female", "/male", "/kids", "/api/cart/:path*", "/api/webhooks/:path*", "/studio/:path*"],
// });

// export const config = {
//   matcher: [
//     "/((?!.*\\..*|_next).*)",
//     "/",
//     "/api/cart/:path*",
//     "/products/:path*,/studio/:path*",
//     "/(api|trpc)(.*)",
//   ],
// };