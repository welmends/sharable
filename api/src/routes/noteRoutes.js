const express = require("express");
const { getNote, saveNote } = require("../controllers/noteController");

const router = express.Router();

router.get("/:name", getNote);
router.post("/:name", saveNote);

module.exports = router;
