import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await connectDB();
  return NextResponse.json({ message: "pong" }, { status: 404 });
}
