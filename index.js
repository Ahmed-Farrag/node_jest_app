const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/appJestDB").then(() => {
  app.listen(8000);
});
const router = require("./routes/post");
app.use(router);

module.exports = app;
