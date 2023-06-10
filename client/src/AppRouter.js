import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import ChooseCategory from "./pages/Quiz/ChooseCategory";
import Question from "./pages/Quiz/Question";
import ReviewQuiz from "./pages/ReviewQuiz/ReviewQuiz";

// Root router
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login></Login> },
  { path: "/register", element: <Register></Register> },
  { path: "/play", element: <Protected component={ChooseCategory}></Protected> },
  { path: "/play/:id", element: <Protected component={Question}></Protected> },
  { path: "/review", element: <Protected component={ReviewQuiz}></Protected> },
  { path: "*", element: <PageNotFound></PageNotFound> },
]);

function AppRouter() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default AppRouter;
