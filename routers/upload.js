const { table } = require("console");
const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const uploadController = require("../controllers/uploadController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../upload"));
  },
  filename: (req, file, cb) => {
    const userId = "123";
    const fileSpl = file.originalname.split(".");
    const fileExt = fileSpl[fileSpl.length - 1];
    cb(null, `${userId}.${fileExt}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

router.route("/").post(upload.single("avatar"), uploadController.upload);
module.exports = router;
