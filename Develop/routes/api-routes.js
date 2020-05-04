// const Cardio = require("../models/cardioModel.js");
// const Resistance = require("../models/resistanceModel.js");
// const router = require("express").Router();
const Workout = require("../models/workoutModel.js");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .limit(7)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find()
      .limit(7)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {});
};
