const dbConfig = require("./config/db");
const express = require("express");
const App = express();

const PORT = 8080;

dbConfig();

App.get("/", function getIndex(req, res) {
  // TODO
});

App.listen(PORT, function startup() {
  console.log(`Server running on port ${PORT}`);
});
