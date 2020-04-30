const Cardio = require("../models/cardioModel.js");
const Resistance = require("../models/resistanceModel.js");

module.exports = function (app) {
  app.post("api/workouts", ({ body }, res) =>
    //   console.log(body));
    {
      Cardio.create(body).then((dbUser) => {
        res.json(dbUser);
      });
    }
  );
};
