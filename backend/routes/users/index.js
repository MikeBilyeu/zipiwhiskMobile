const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  require("./getUser")
);

router.post("/register", require("./createUser"));

router.post("/login", require("./userLogin"));

module.exports = router;
