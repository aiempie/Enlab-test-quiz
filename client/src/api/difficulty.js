import axios from "axios";
import ApiUrl from "../helper/RewriteUrl";
import {
  getDifficultyStart,
  getDifficultySuccess,
  getDifficultyFailed,
} from "../redux/slice/difficultySlice";

export const getDifficulty = async (dispath) => {
  dispath(getDifficultyStart());
  try {
    const res = await axios.get(ApiUrl(`/v1/diffculty/`));
    dispath(getDifficultySuccess(res.data.difficulty));
  } catch (error) {
    dispath(getDifficultyFailed());
    console.log(error);
  }
};
