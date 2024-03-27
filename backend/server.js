require("dotenv").config();
const dbConfig = require("./config/db");
const express = require("express");
const notesRouter = require("./routes/notes");
const mongoose = require("mongoose");
const cors = require("cors");
const App = express();

const { PORT } = process.env;

dbConfig();

App.use(cors());
App.use(express.json());
App.use("/notes", notesRouter);
App.get("/", async function getIndex(req, res) {});

mongoose.connection.on("open", function afterDbSuccess() {
  console.log("Successfully connected to DB");
  App.listen(PORT, function startup() {
    console.log(`Server running on port ${PORT}`);
  });
});
