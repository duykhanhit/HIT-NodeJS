const express = require("express");

const router = express.Router();

const authorController = require("../controllers/authorController");

router.route("/").get(authorController.getAll).post(authorController.create);

module.exports = router;
