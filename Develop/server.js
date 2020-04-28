const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 8080;

const User = require("./userModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes Goes Here
// require("./routes/html-routes.js")(app);
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

app.listen(PORT, () => {
  console.log(
    `App is running and can be accessed via: http://localhost/${PORT}`
  );
});
