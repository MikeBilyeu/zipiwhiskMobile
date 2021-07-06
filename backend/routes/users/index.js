const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  require("./getUser")
);

router.post("/register", require("./createUser"));

router.post(
  "/follow",
  passport.authenticate("jwt", { session: false }),
  require("./follow")
);

router.post(
  "/unfollow",
  passport.authenticate("jwt", { session: false }),
  require("./unfollow")
);

router.get("/login", require("./login"));

router.get("/email", require("./checkEmail"));

router.get("/username", require("./checkUsername"));

router.put(
  "/edit",
  passport.authenticate("jwt", { session: false }),
  require("./edit")
);

module.exports = router;
