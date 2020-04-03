const express = require("express"),
  router = express.Router(),
  postsModel = require("../models/post");

router.get("/", async (req, res, next) => {
  const postData = await postsModel.getpost();
  res.json(postData).status(200);
});

module.exports = router;
