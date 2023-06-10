const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DifficultySchema = new Schema({
  difficultyName: {
    type: String,
    require: true,
  },
  score: {
    type: Number,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("difficulty", DifficultySchema);
