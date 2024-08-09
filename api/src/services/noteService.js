const Note = require("../models/noteModel");

const getNoteByName = async (name) => {
  return await Note.findOne({ name });
};

const createOrUpdateNote = async (name, content) => {
  return await Note.findOneAndUpdate(
    { name },
    { content },
    { new: true, upsert: true }
  );
};

module.exports = {
  getNoteByName,
  createOrUpdateNote,
};
