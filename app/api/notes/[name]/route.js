export const dynamic = "force-dynamic"; // static by default, unless reading the request

import connectDB from "../../../../lib/db";
import Note from "../../../../models/noteModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();

  const { name } = params;

  try {
    const note = await Note.findOne({ name });
    if (note) {
      return NextResponse.json(note);
    } else {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req, { params }) {
  await connectDB();

  const { name } = params;
  const { content } = await req.json();

  try {
    const note = await Note.findOneAndUpdate(
      { name },
      { content },
      { new: true, upsert: true }
    );
    return NextResponse.json(note);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
