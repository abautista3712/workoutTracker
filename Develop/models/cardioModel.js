const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  type: {
    type: String,
    trim: true,
  },
  cardio-name: {
    type: String,
    trim: true,
    required: "Exercise name is Required",
  },
  distance: {
    type: Number,
    required: "Distance is Required",
  },
  duration: {
    type: Number,
    required: "Duration in minutes is Required",
  },
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;
