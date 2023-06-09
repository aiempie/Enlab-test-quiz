import axios from "axios";
import ApiUrl from "../helper/RewriteUrl";

export const getListQues = async (cate, dispath, navigate) => {
  dispath(loginStart());
  try {
    const res = await axios.post(ApiUrl("/v1/auth/login"), user);
    dispath(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    dispath(loginFailed());
    console.log(error);
  }
};
