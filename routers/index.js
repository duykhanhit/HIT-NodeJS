const bookRouter = require("./bookRouter");
const categoryRouter = require("./categoryRouter");
const errorHandle = require("../middlewares/errorHandle");

module.exports = (app) => {
  app.use("/api/books", bookRouter);
  app.use("/api/category", categoryRouter);

  //Handle error response
  app.use(errorHandle);
};
