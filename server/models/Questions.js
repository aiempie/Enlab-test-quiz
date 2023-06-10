const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: {
    type: String,
    require: true,
  },
  correctAnswer: {
    type: String,
    require: true,
  },
  incorrectAnswers: {
    type: Array,
    default: [],
    require: true,
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "categories",
  },
  difficulty_id: {
    type: Schema.Types.ObjectId,
    ref: "difficulty",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("questions", QuestionSchema);
