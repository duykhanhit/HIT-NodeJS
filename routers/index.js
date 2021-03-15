const bookRouter = require("./bookRouter");
const categoryRouter = require("./categoryRouter");
const authRouter = require("./auth");
const errorHandle = require("../middlewares/errorHandle");
const adminMiddleware = require("../middlewares/adminMiddleware");
module.exports = (app) => {
  app.use("/api/books", bookRouter);
  app.use("/api/category", adminMiddleware.adminMiddleware, categoryRouter);
  app.use("/api/auth", authRouter);
  //Handle error response
  app.use(errorHandle);
};
