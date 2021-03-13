const cors = require("cors");
const bodyParser = require("body-parser");

module.exports.addMiddleWares = (app) =>
  app.use(
    cors(),
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json()
  );
