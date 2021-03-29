const asyncHandle = require("../middlewares/asyncHandle");
const Author = require("../models/Author");
const { login } = require("./authController");

module.exports = {
  create: asyncHandle(async (req, res, next) => {
    const author = await Author.create(req.body);
    res.json({
      success: true,
      data: author,
    });
  }),
  getAll: async (req, res, next) => {
    try {
      const authors = await Author.findOne().select("+pass");

      res.json({
        success: true,
        data: authors,
      });
    } catch (err) {
      console.log(err.message);
    }
  },
};
