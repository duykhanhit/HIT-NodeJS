const Book = require("../models/Book");

module.exports = {
  getAllBook: async (req, res) => {
    try {
      const books = await Book.find({
        categoryID: req.params.id,
      });

      res.json({
        err: 0,
        success: true,
        data: books,
      });
    } catch (err) {
      res.json({
        err: 1,
        success: false,
        data: err.message,
      });
    }
  },

  getBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);

      res.json({
        err: 0,
        success: true,
        data: book,
      });
    } catch (err) {
      res.json({
        err: 1,
        success: false,
        data: err.message,
      });
    }
  },

  createBook: async (req, res) => {
    try {
      const { bookName, price, author, nxb } = req.body;

      const book = await Book.create({
        bookName,
        price,
        author,
        nxb,
        categoryID: req.params.id,
      });

      res.json({
        err: 0,
        success: true,
        data: book,
      });
    } catch (err) {
      res.json({
        err: 1,
        success: false,
        data: err.message,
      });
    }
  },
  updateBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      res.json({
        err: 0,
        success: true,
        data: book,
      });
    } catch (err) {
      res.json({
        err: 1,
        success: false,
        data: err.message,
      });
    }
  },
  deleteBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);

      if (!book) {
        return res.json({
          err: 1,
          success: false,
          data: `Cannot find Book with ID ${req.params.id}`,
        });
      }

      res.json({
        err: 0,
        success: true,
        data: {},
      });
    } catch (err) {
      res.json({
        err: 1,
        success: false,
        data: err.message,
      });
    }
  },
};
