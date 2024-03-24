const mongoose = require("mongoose");

const Note = new mongoose.Schema({
  title: String,
  description: String,
});

module.exports = Note;
