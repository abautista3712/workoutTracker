const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Exercise Type is Required",
  },
  name: {
    type: String,
    trim: true,
    required: "Exercise Name is Required",
  },
  duration: {
    type: Number,
    required: "Duration in minutes is Required",
  },
  weight: {
    type: Number,
    required: "Weight is Required",
  },
  reps: {
    type: Number,
    required: "Number of reps is Required",
  },
  sets: {
    type: Number,
    required: "Number of sets is Required",
  },
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;
