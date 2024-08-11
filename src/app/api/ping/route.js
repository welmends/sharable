export const dynamic = "force-dynamic"; // static by default, unless reading the request

import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json({ message: "pong" }, { status: 404 });
}
