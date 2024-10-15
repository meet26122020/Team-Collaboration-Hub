const { default: mongoose } = require("mongoose");
require('dotenv').config();

const db = mongoose
  .connect("mongodb+srv://meetkanpariya00:AfyL5pesfRt1IkbX@cluster0.5ppe6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("database connected 👍");
  })
  .catch(() => {
    console.log("database not connected");
  });

module.exports = db;
