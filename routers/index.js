const bookRouter = require("./bookRouter");
const categoryRouter = require("./categoryRouter");
const authorRouter = require("./authorRouter");
const authRouter = require("./auth");
const uploadRouter = require("./upload");
const errorHandle = require("../middlewares/errorHandle");
const adminMiddleware = require("../middlewares/adminMiddleware");
module.exports = (app) => {
  app.use("/api/books", bookRouter);
  app.use("/api/category", categoryRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/upload", uploadRouter);
  app.use("/api/author", authorRouter);
  //Handle error response
  app.use(errorHandle);
};
