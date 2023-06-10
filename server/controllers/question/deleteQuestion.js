const { response } = require("express");
const Question = require("../../models/Questions");
const Category = require("../../models/Categories");
const Difficulty = require("../../models/Difficulty");

const deleteQuestions = async (req, res = response) => {
  try {
    const delQuestion = await Question.findOneAndDelete({ _id: req.params.id });
    if (!delQuestion) {
      return res.status(401).json({
        success: false,
        message: "The question is not found",
      });
    }
    res.json({
      success: true,
      message: "Question delete successfully",
      questionInfo: delQuestion,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = deleteQuestions;
