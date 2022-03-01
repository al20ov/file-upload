const express = require("express");
const multer = require("multer");

const PORT = process.env.PORT || 8080;

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("file");

app.get("/", function (req, res, next) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/upload", upload, function (req, res, next) {
  console.log(`Created file`)
  res.status(201).send("Created");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
