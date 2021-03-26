const bookRouter = require("./bookRouter");
const categoryRouter = require("./categoryRouter");
const authRouter = require("./auth");
const uploadRouter = require("./upload");
const errorHandle = require("../middlewares/errorHandle");
const adminMiddleware = require("../middlewares/adminMiddleware");
module.exports = (app) => {
  app.use("/api/books", bookRouter);
  app.use("/api/category", adminMiddleware.adminMiddleware, categoryRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/upload", uploadRouter);
  //Handle error response
  app.use(errorHandle);
};
