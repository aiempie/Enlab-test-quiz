const { response } = require("express");
const SetQuiz = require("../../models/SetQuiz");

const addSetQuiz = async (req, res = response) => {
  const { times, answers } = req.body;
  //check validate cateid & diffid
  if (!times || !answers) {
    return res.status(400).json({
      success: false,
      message: "Missing information",
    });
  }
  try {
    const newSetQuiz = new SetQuiz({
      times,
      answers,
      user_id: req.user._id.toString(),
    });
    await newSetQuiz.save();
    res.json({
      success: true,
      message: "SetQuiz create successfully",
      setQuizInfo: newSetQuiz,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = addSetQuiz;
