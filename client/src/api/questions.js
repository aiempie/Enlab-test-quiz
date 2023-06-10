import axios from "axios";
import ApiUrl from "../helper/RewriteUrl";
import {
  getQuestionStart,
  getQuestionSuccess,
  getQuestionFailed,
} from "../redux/slice/questionsSlice";

export const getListQues = async (cateid, dispath) => {
  dispath(getQuestionStart());
  try {
    let category_id = cateid !== "all" ? cateid : null;
    const res = await axios.get(ApiUrl(`/v1/question?category_id=${category_id}`));
    dispath(getQuestionSuccess(res.data.questions));
  } catch (error) {
    dispath(getQuestionFailed());
    console.log(error);
  }
};

export const getQuesBySetQuiz = async (answers, dispath) => {
  dispath(getQuestionStart());
  try {
    const res = await axios.post(ApiUrl(`/v1/question/get-question-by-set-quiz`), { answers });
    dispath(getQuestionSuccess(res.data.questions));
  } catch (error) {
    dispath(getQuestionFailed());
    console.log(error);
  }
};
