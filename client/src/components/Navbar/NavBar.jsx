import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginFailed } from "../../redux/slice/authSlice";

const NavBar = () => {
  const user = useSelector((state) => {
    return state.auth.login.currentUser;
  });

  const dispath = useDispatch();
  const handLogout = () => {
    dispath(loginFailed());
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-75 py-3">
      <nav className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-white text-xl font-semibold">
          Let Quizz
        </a>
        <ul className="flex space-x-4">
          {user ? (
            <>
              <span className="text-yellow-500 cursor-pointer hover:text-yellow-700">History</span>
              <span className="text-green-500">Hi, {user.username} !</span>
              <span className="text-red-500 cursor-pointer hover:text-red-700" onClick={handLogout}>
                Logout!
              </span>
            </>
          ) : (
            <>
              <li>
                <a
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-sm"
                  href="/register"
                >
                  SignUp
                </a>
              </li>
              <li>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm"
                  href="/login"
                >
                  LogIn
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
