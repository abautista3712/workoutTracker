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
      res.json(err);
      console.log(err);
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
      res.json(err);
      console.log(err);
    });
});

router.post("/api/workouts", (req, res) => {
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

router.put("/api/workouts/:id", (req, res) => {});

module.exports = router;
