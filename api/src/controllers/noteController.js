const noteService = require("../services/noteService");

const getNote = async (req, res) => {
  const { name } = req.params;
  try {
    const note = await noteService.getNoteByName(name);
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveNote = async (req, res) => {
  const { name } = req.params;
  const { content } = req.body;
  try {
    const note = await noteService.createOrUpdateNote(name, content);
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getNote,
  saveNote,
};
