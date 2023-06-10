const { response } = require("express");
const Category = require("../../models/Categories");

const addCategories = async (req, res = response) => {
  const { cateName, description } = req.body;
  if (!cateName) {
    return res.status(404).json({
      success: false,
      message: "Missing name of the category name",
    });
  }
  try {
    const hasCate = await Category.findOne({ cateName });
    if (hasCate) {
      return res.status(400).json({
        success: false,
        message: "This category is available",
      });
    }
    const newCate = new Category({
      cateName,
      description,
    });
    await newCate.save();
    res.json({
      success: true,
      message: "Category create successfully",
      categoryInfo: newCate,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = addCategories;
