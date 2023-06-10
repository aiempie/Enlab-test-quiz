const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SetQuizSchema = new Schema({
  times: {
    type: Number,
    require: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  answers: {
    type: Array,
    default: [],
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("set-quiz", SetQuizSchema);
