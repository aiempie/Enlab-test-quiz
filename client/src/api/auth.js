import axios from "axios";
import { toast } from "react-hot-toast";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "../redux/slice/authSlice";
import ApiUrl from "../helper/RewriteUrl";
import setAuthToken from "../helper/setAuthToken";

export const loginUser = async (user, dispath, navigate) => {
  dispath(loginStart());
  try {
    const res = await axios.post(ApiUrl("/v1/auth/login"), user);
    dispath(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    dispath(loginFailed());
    toast.error(error.response.data.message);
  }
};

export const registerUser = async (user, dispath, navigate) => {
  dispath(registerStart());
  try {
    await axios.post(ApiUrl("/v1/auth/register"), user);
    dispath(registerSuccess());
    navigate("/login");
  } catch (error) {
    dispath(registerFailed());
    toast.error(error.response.data.message);
  }
};

export const loadUser = async (dispath) => {
  if (localStorage["accessToken"]) {
    setAuthToken(localStorage["accessToken"]);
  }
  try {
    const res = await axios.get(ApiUrl("/v1/auth"));
    if (res.data.success) {
      dispath(loginSuccess(res.data));
    }
  } catch (error) {
    dispath(loginFailed());
  }
};
