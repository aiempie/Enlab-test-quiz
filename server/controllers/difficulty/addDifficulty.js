const { response } = require("express");
const Difficulty = require("../../models/Difficulty");

const addDifficulty = async (req, res = response) => {
  const { difficultyName, score } = req.body;
  if (!difficultyName) {
    return res.status(404).json({
      success: false,
      message: "Missing name of the Difficulty name",
    });
  }
  try {
    const hasDiff = await Difficulty.findOne({ difficultyName });
    if (hasDiff) {
      return res.status(400).json({
        success: false,
        message: "This Difficulty is available",
      });
    }
    const newDiff = new Difficulty({
      difficultyName,
      score,
    });
    await newDiff.save();
    res.json({
      success: true,
      message: "Difficulty create successfully",
      difficultyInfo: newDiff,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = addDifficulty;
