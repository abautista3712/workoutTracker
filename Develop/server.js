const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb: //localhost/userdb", {
  useNewUrlParser: true,
});

// Routes Goes Here

app.listen(PORT, () => {
  console.log(
    `App is running and can be accessed via http://localhost/${PORT}`
  );
});
