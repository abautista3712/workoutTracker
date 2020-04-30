const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
  exerciseType: {
    type: String,
    trim: true,
    required: "Exercise Type is Required",
  },

  exerciseName: {
    type: String,
    trim: true,
    required: "Exercise Name is Required",
  },

  weight: {
    type: Number,
    required: "Weight is Required",
  },

  sets: {
    type: Number,
    required: "Number of sets is Required",
  },
  reps: {
    type: Number,
    required: "Number of reps is Required",
  },
  duration: {
    type: Number,
    required: "Duration in minutes is Required",
  },
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;
