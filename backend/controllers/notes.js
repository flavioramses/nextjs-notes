const mongoose = require("mongoose");
const Note = require("../models/Note");

/*

  /notes

*/

// GET /
async function getAllNotes(req, res) {
  const notes = await Note.find().lean();

  if (!notes) {
    res.status(500).json("Server error");
    return;
  }

  res.json({ data: notes });
}

// GET /:id
async function getNote(req, res) {
  const { params } = req;

  if (params.id === undefined) {
    res.status(400).json({ message: "Please provide an id" });
    return;
  }

  const validId = mongoose.Types.ObjectId.isValid(params.id);

  if (!validId) {
    res.status(400).json({ message: `${params.id} is not a valid Id` });
    return;
  }

  const note = await Note.findById(params.id).exec();

  if (!note) {
    res
      .status(404)
      .json({ message: `Note with id of ${params.id} was not found` });
    return;
  }

  res.json({ data: note });
}

// POST /
async function addNote(req, res) {
  const { title, description } = req.body;

  if (title === undefined || title.length < 1) {
    res.status(400).json({ message: "Please provide a title" });
    return;
  }

  const note = new Note({
    title,
    description,
  });

  try {
    await note.save();
  } catch (err) {
    res.status(500).json({ message: "Server error" });
    return;
  }

  res.json(`Note with id of ${note.id} added successfully!`);
}

module.exports = {
  getAllNotes,
  getNote,
  addNote,
};
