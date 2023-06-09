import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { loginValidate } from "../../helper/validate";
import { loginUser } from "../../api/auth";
import { useDispatch } from "react-redux";

function LoginForm() {
  const [isRememeber, setIsRemember] = useState(false);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: loginValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (value) => {
      const user = {
        username: value.username,
        password: value.password,
        isRemember: isRememeber,
      };
      loginUser(user, dispath, navigate);
    },
  });

  const handLoginWithGoogle = () => {
    toast.error("Feature under development");
  };
  return (
    <section className=" flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample"
        />
      </div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            onClick={handLoginWithGoogle}
          >
            <i className="fa-brands fa-google fa-flip" style={{ color: "#fff" }} />
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Username"
            {...formik.getFieldProps("username")}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input
                className="mr-1"
                type="checkbox"
                value={isRememeber}
                onChange={(e) => setIsRemember(e.target.checked)}
              />
              <span>Remember Me</span>
            </label>
            <Link
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              to="#"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account?{" "}
          <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/register">
            Register
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
