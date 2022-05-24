module.exports = (app) => {
  var router = require("express").Router();
  const controller = require("./controller.js");

  router.get("", controller.echo);

  app.use("", router);
};