const jwt = require("jsonwebtoken");
const secret = "123456789";
exports.adminMiddleware = (req, res, next) => {
  const token = req.headers["x-token"];
  try {
    const payload = jwt.verify(token, secret);
    if (payload.role !== "admin") {
      res.status(401).send();
    }
    next();
  } catch (error) {
    res.status(401).send("loi");
  }
};
