const authRouters = require("./auth/authRouters");
const questionRouters = require("./question/questionRouters");
const categoryRouters = require("./category/categoryRouters");
const difficultyRouters = require("./diffculty/diffcultyRouters");
const setQuizRouters = require("./setQuiz/setQuizRouter");

const routes = (app) => {
  const apiRoute = (routeName) => `/api/v1/${routeName}`;
  app.use(apiRoute("auth"), authRouters);
  app.use(apiRoute("question"), questionRouters);
  app.use(apiRoute("category"), categoryRouters);
  app.use(apiRoute("diffculty"), difficultyRouters);
  app.use(apiRoute("set-quiz"), setQuizRouters);
  app.use("/", (req, res) => {
    res.send("Hello World");
  });
};

module.exports = routes;
