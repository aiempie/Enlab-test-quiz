import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidate } from "../../helper/validate";
import { registerUser } from "../../api/auth";
import { useDispatch } from "react-redux";

function RegisterForm() {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      repassword: "",
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (value) => {
      const user = {
        username: value.username,
        password: value.password,
        email: value.email,
      };
      registerUser(user, dispath, navigate);
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
            type="text"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Re-Password"
            {...formik.getFieldProps("repassword")}
          />
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Have an account?{" "}
          <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/login">
            Login Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;
