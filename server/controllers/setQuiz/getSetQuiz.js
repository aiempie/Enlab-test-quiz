const { response } = require("express");
const SetQuiz = require("../../models/SetQuiz");

const getListSetQuiz = async (req, res = response) => {
  try {
    const setQuiz = await SetQuiz.find({ user_id: req.user._id });
    res.json({
      success: true,
      setQuiz: setQuiz,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = getListSetQuiz;
