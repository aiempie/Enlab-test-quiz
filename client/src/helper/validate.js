import toast from "react-hot-toast";

export async function loginValidate(values) {
  const errors = loginVerify({}, values);

  return errors;
}

export async function registerValidate(values) {
  const errors = registerVerify({}, values);

  return errors;
}

// validate login
function loginVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (!values.password) {
    error.password = toast.error("Password Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  } else if (values.password.length < 4) {
    error.password = toast.error("Password must be more than 4 characters");
  }
  return error;
}

function registerVerify(error = {}, values) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  } else if (!values.email) {
    error.email = toast.error("Email Required...!");
  } else if (!emailRegex.test(values.email)) {
    error.email = toast.error("Invalid Email...!");
  } else if (!values.password) {
    error.password = toast.error("Password Required...!");
  } else if (values.password.length < 4) {
    error.password = toast.error("Password must be more than 4 characters!");
  } else if (!values.repassword) {
    error.repassword = toast.error("Re-Password Required...!");
  } else if (values.repassword !== values.password) {
    error.repassword = toast.error("Password and Re-Password do not match!");
  }
  return error;
}
