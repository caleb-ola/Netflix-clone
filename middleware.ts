import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const { cookies } = req;
  // const cookies = new Cookies();
  // console.log(cookies.get("netflix-clone"));
  if (req.nextUrl.pathname.startsWith("/home")) {
    if (!cookies.get("netflix-clone")) {
      return NextResponse.redirect("http://localhost:3001/");
    }
    return NextResponse.next();
  }
}
