require("dotenv").config();
const mongoose = require("mongoose");

function db() {
  mongoose.connect(process.env.MONGO_URI);
}

module.exports = db;
