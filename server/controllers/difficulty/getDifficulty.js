const { response } = require("express");
const Difficulty = require("../../models/Difficulty");

const getDifficulty = async (req, res = response) => {
  try {
    const diff = await Difficulty.find();
    res.json({
      success: true,
      difficulty: diff,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = getDifficulty;
