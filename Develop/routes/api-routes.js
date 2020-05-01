// const Cardio = require("../models/cardioModel.js");
// const Resistance = require("../models/resistanceModel.js");
const Workout = require("../models/workoutModel.js");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    Workout.find()
      .sort({ _id: -1 })
      .limit(1)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find()
      .sort({ _id: -1 })
      .limit(1)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    // console.log(res)
    Workout.create({})
      .then((response) => {
        // console.log(response);
        res.json(response);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {});
};
