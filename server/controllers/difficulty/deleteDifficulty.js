const { response } = require("express");
const Difficulty = require("../../models/Difficulty");

const delDifficulty = async (req, res = response) => {
  try {
    const delDiff = await Difficulty.findOneAndDelete({ _id: req.params.id });
    if (!delDiff) {
      return res.status(401).json({
        success: false,
        message: "The dificulty is not found",
      });
    }
    res.json({
      success: true,
      message: "Difficulty delete successfully",
      diffcultyInfo: delDiff,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = delDifficulty;
