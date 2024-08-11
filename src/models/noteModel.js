// models/noteModel.js
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;
