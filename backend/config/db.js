require("dotenv").config();
const mongoose = require("mongoose");

async function db() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.error(err);
  }
}

module.exports = db;
