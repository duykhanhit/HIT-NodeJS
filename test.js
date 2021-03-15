const jwt = require("jsonwebtoken");

const user = {
  name: "Tung",
  id: "123445",
  role: "admin",
};
const secret = "12345678";

const token = jwt.sign(user, secret, { expiresIn: 60 });

// const payload = jwt.verify(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVHVuZyIsImlkIjoiMTIzNDQ1Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjE1NzI2NzU0fQ.b60T5CfB1WDnyeS2HgIoHKkJG5AGsBS_bUKiU9v6MTo",
//   secret
// );
// console.log(token);
// console.log(payload);
