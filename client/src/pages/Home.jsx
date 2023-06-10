import React from "react";
import bg from "../assets/images/aure.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center flex-col ">
      <img src={bg} alt="bg" />
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
        to="/play"
      >
        Play now
      </Link>
    </div>
  );
}

export default Home;
