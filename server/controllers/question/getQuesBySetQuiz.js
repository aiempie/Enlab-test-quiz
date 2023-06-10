const { response } = require("express");
const Questions = require("../../models/Questions");

const getQuesBySetQuiz = async (req, res = response) => {
  const { answers } = req.body;
  try {
    let result = [];
    for (let i = 0; i < answers.length; i++) {
      try {
        const ques = await Questions.findById(answers[i]._id);
        result.push(ques);
      } catch (error) {
        console.log(error);
      }
    }

    res.json({
      success: true,
      questions: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = getQuesBySetQuiz;
