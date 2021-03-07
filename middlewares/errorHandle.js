const ErrorResponse = require("../helpers/ErrorResponse");

const errorHandle = (err, req, res, next) => {
  let error = { ...err };

  console.log(err.name);

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((v) => v.message);
    error = new ErrorResponse(400, message);
  }

  if (err.code === 11000) {
    const message = "Duplicate value.";
    error = new ErrorResponse(400, message);
  }

  if (err.name === "CastError") {
    const message = "Can not find resource.";
    error = new ErrorResponse(404, message);
  }

  res.status(error.statusCode).json({
    err: 1,
    success: false,
    data: error.message,
  });
};

module.exports = errorHandle;
