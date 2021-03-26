const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const connectDB = require("./config/database");
connectDB();

const app = express();
app.use(express.static(path.join(__dirname, "./upload")));
const router = require("./routers");

app.use(express.json());

router(app);

app.listen(5000, console.log(`Server running on PORT 5000`));
