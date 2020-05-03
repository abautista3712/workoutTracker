// const Cardio = require("../models/cardioModel.js");
// const Resistance = require("../models/resistanceModel.js");
const router = require("express").Router();
const Workout = require("../models/workoutModel.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    // .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find()
    // .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  // console.log(res)
  Workout.create({})
    .then((dbWorkout) => {
      // console.log(response);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {});

module.exports = router;
