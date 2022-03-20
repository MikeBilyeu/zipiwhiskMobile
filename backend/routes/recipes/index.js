const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  require("./createRecipe")
);

router.get(
  "/recipe",
  passport.authenticate("jwt", { session: false }),
  require("./getRecipe")
);

module.exports = router;
