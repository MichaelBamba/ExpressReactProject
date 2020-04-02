var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.send("Welcome to the Cabin Fever Blog").status(200);
});

module.exports = router;
