var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("template", {
    locals: {
      title: "Pandemic Venting",
      data: data
    },
    partials: {
      partial: "partal-index"
    }
  });
});

module.exports = router;
