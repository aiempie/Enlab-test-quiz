import axios from "axios";
import ApiUrl from "../helper/RewriteUrl";
import {
  setCurrentSetQuizStart,
  setCurrentSetQuizSuccess,
  setCurrentSetQuizFailed,
} from "../redux/slice/setQuizSlice";

export const addSetQuiz = async (times, answers, dispath) => {
  dispath(setCurrentSetQuizStart());
  try {
    const res = await axios.post(ApiUrl(`/v1/set-quiz/add-set-quiz/`), { times, answers });
    dispath(setCurrentSetQuizSuccess(res.data.setQuizInfo));
  } catch (error) {
    dispath(setCurrentSetQuizFailed());
    console.log(error);
  }
};
