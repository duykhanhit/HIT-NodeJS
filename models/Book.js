const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: [true, "Book name is invalid."],
    },
    price: {
      type: String,
      required: [true, "Price is invalid."],
    },
    author: {
      type: String,
      required: [true, "Author is invalid."],
    },
    nxb: {
      type: String,
      required: [true, "NXB is invalid."],
    },
    categoryID: {
      type: mongoose.Schema.ObjectId,
      ref: "category",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

bookSchema.methods.getName = function () {
  return this.bookName;
};

module.exports = mongoose.model("book", bookSchema);
