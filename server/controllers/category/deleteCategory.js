const { response } = require("express");
const Category = require("../../models/Categories");

const delCategories = async (req, res = response) => {
  try {
    const delCate = await Category.findOneAndDelete({ _id: req.params.id });
    if (!delCate) {
      return res.status(401).json({
        success: false,
        message: "The category is not found",
      });
    }
    res.json({
      success: true,
      message: "Category delete successfully",
      categoryInfo: delCate,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = delCategories;
