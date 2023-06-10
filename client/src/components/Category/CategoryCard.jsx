import React from "react";

function CategoryCard(props) {
  return (
    <div className="w-1/2 mx-auto bg-gray-500 text-white shadow-md rounded-md p-4 mt-4 transform hover:-translate-y-1 hover:shadow-lg hover:text-blue-300 cursor-pointer">
      <h2 className="text-xl font-bold text-center ">{props.item.cateName}</h2>
    </div>
  );
}

export default CategoryCard;
