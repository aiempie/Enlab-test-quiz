const { response } = require("express");
const Question = require("../../models/Questions");
const Category = require("../../models/Categories");
const Difficulty = require("../../models/Difficulty");

const updateQuestions = async (req, res = response) => {
  const { question, correctAnswer, incorrectAnswers, category_id, difficulty_id } = req.body;
  //check validate cateid & diffid
  if (!category_id || !difficulty_id) {
    return res.status(400).json({
      success: false,
      message: "Missing category or difficulty",
    });
  }
  try {
    const isHasCategory = await Category.findOne({ _id: category_id });
    if (!isHasCategory) {
      return res.status(403).json({
        success: false,
        message: "Dont have this category",
      });
    }
    const isHasDifficulty = await Difficulty.findOne({ _id: difficulty_id });
    if (!isHasDifficulty) {
      return res.status(403).json({
        success: false,
        message: "Dont have this difficulty",
      });
    }
    let updateQuestion = new Question({
      question,
      correctAnswer,
      incorrectAnswers,
      category_id,
      difficulty_id,
    });
    updateQuestion = await Question.findOneAndUpdate({ _id: req.params.id }, updateQuestion, {
      new: true,
    });
    if (!updateQuestion) {
      return res.status(401).json({
        success: false,
        message: "The question is not found",
      });
    }
    res.json({
      success: true,
      message: "Question update successfully",
      questionInfo: updateQuestion,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = updateQuestions;
