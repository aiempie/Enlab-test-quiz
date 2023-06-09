import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";

// Root router
const router = createBrowserRouter([
  { path: "/", element: <div>Home</div> },
  { path: "/login", element: <Login></Login> },
  { path: "/register", element: <Register></Register> },
  { path: "*", element: <PageNotFound></PageNotFound> },
]);

function AppRouter() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default AppRouter;
