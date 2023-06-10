const { response } = require("express");
const Category = require("../../models/Categories");

const updateCategories = async (req, res = response) => {
  const { cateName, description } = req.body;
  if (!cateName) {
    return res.status(404).json({
      success: false,
      message: "Missing name of the category name",
    });
  }
  try {
    let updateCate = { cateName, description };
    updateCate = await Category.findOneAndUpdate({ _id: req.params.id }, updateCate, { new: true });
    if (!updateCate) {
      return res.status(401).json({
        success: false,
        message: "The category is not found",
      });
    }
    res.json({
      success: true,
      message: "Category update successfully",
      categoryInfo: updateCate,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = updateCategories;
