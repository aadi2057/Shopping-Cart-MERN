var express = require("express");
var router = express.Router();

const User = require("../models/user");

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

router.post("/register", (req, res, next) => {});

module.exports = router;
