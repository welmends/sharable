const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
