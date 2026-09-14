import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL("/about#services", req.url);
  return NextResponse.redirect(url, 308); // Permanent redirect
}
