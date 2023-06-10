import axios from "axios";
import ApiUrl from "../helper/RewriteUrl";
import {
  getCategoryStart,
  getCategorySuccess,
  getCategoryFailed,
} from "../redux/slice/categorySlice";

export const getAllCategories = async (dispath) => {
  dispath(getCategoryStart());
  try {
    const res = await axios.get(ApiUrl(`/v1/category/`));
    dispath(getCategorySuccess(res.data.categories));
  } catch (error) {
    dispath(getCategoryFailed());
    console.log(error);
  }
};
