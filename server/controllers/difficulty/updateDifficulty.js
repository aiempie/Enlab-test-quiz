const { response } = require("express");
const Difficulty = require("../../models/Difficulty");

const updateDifficulty = async (req, res = response) => {
  const { difficultyName, score } = req.body;
  if (!difficultyName) {
    return res.status(404).json({
      success: false,
      message: "Missing name of the difficulty name",
    });
  }
  try {
    let updateDiff = { difficultyName, score };
    updateDiff = await Difficulty.findOneAndUpdate({ _id: req.params.id }, updateDiff, {
      new: true,
    });
    if (!updateDiff) {
      return res.status(401).json({
        success: false,
        message: "The difficulty is not found",
      });
    }
    res.json({
      success: true,
      message: "Diffculty update successfully",
      diffcultyInfo: updateDiff,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = updateDifficulty;
