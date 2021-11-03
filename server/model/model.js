const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  ISBN: {
    type: String,
    // unique: true,
  },
  quantity: Number,
  department: {
    type: String,
    // required: true,
  },
  year: Number,
  author: String,
  status: String,
});

const Book = mongoose.model("Book", schema);

module.exports = Book;
