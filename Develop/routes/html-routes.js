const path = require("path");

module.exports = function (app) {
  app.get("/exercise", (req, res) => {
    console.log("---req---");
    console.log(req);
    console.log("---res---");
    console.log(res);
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
};
