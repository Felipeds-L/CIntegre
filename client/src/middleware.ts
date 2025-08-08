import { NextRequest, NextResponse } from "next/server";
import verifyToken from "./lib/verifyToken";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const authenticated = token ? await verifyToken(token) : false;

  if (!authenticated && req.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!authenticated && req.nextUrl.pathname.startsWith("/my-activities")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!authenticated && req.nextUrl.pathname.startsWith("/home")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (authenticated && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/login/:path*",
    "/my-activities/:path*",
    "/home/:path*",
  ],
};
