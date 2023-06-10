const { response } = require("express");
const Category = require("../../models/Categories");
const Questions = require("../../models/Questions");

const getQuestions = async (req, res = response) => {
  let { category_id } = req.query;
  let query = {};
  try {
    if (!category_id || category_id === "null") {
      query = {};
    } else {
      const isHasCategory = await Category.findOne({ _id: category_id });
      if (!isHasCategory) {
        return res.status(404).json({
          success: false,
          message: "Dont have this Category",
        });
      }
      query = { category_id: category_id };
    }
    const randomQuestions = await Questions.aggregate([
      { $match: query },
      { $sample: { size: 10 } },
    ]);
    res.json({
      success: true,
      questions: randomQuestions,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = getQuestions;
