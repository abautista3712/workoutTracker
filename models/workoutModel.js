const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise type is required",
      },
      name: {
        type: String,
        trim: true,
        required: "Exercise name is required",
      },
      duration: {
        type: Number,
        required: "Duration in minutes is required",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
