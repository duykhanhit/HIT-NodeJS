const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

exports.adminMiddleware = (req, res, next) => {
  const token = req.headers["x-token"];
  try {
    const payload = jwt.verify(token, secret);
    if (payload.role !== "admin") {
      res.status(401).send();
    }

    req.user = {
      username: "admin",
      displayname: "abc",
    };
    next();
  } catch (error) {
    res.status(401).send("loi");
  }
};
