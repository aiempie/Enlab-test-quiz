import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../api/category";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../components/Category/CategoryCard";
import { Link } from "react-router-dom";

function ChooseCategory() {
  const categories = useSelector((state) => {
    return state.categories.category.categories;
  });
  const dispath = useDispatch();
  useEffect(() => {
    getAllCategories(dispath);
  }, []);

  return (
    <div className="container">
      <h1 className="title text-light text-3xl font-bold mb-6">Select One Category</h1>
      <Link to={`/play/all`}>
        <CategoryCard item={{ _id: 0, cateName: "All Category", description: "" }} />
      </Link>
      {/* {categories.map((item) => {
        return (
          <Link to={`/play/${item._id}`} key={item._id}>
            <CategoryCard item={item} />
          </Link>
        );
      })} */}
    </div>
  );
}

export default ChooseCategory;
