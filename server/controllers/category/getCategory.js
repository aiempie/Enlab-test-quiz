const { response } = require("express");
const Category = require("../../models/Categories");

const getCategories = async (req, res = response) => {
  try {
    const category = await Category.find();
    res.json({
      success: true,
      categories: category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = getCategories;
