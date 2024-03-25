require("dotenv").config();
const dbConfig = require("./config/db");
const express = require("express");
const Note = require("./models/Note");
const App = express();

const { PORT } = process.env;

dbConfig();

App.get("/", async function getIndex(req, res) {
  const randomId = Math.round(Math.random() * 20);
  const myNote = new Note({
    title: "This is a note",
    description: `Random note #${randomId}`,
  });

  await myNote.save();
  res.json(`Note #${randomId} added successfully!`);
});

App.listen(PORT, function startup() {
  console.log(`Server running on port ${PORT}`);
});
