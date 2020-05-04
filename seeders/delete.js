let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

db.Workout.collection
  .drop()
  .then(console.log("Database successfully dropped."))
  .then((err) => process.exit(0));
