const express = require("express"),
  router = express.Router(),
  postsModel = require("../models/post");

router.get("/", async (req, res, next) => {
  const postData = await postsModel.getAll();
  res.send("respond with a resource").status(200);
});

module.exports = router;
