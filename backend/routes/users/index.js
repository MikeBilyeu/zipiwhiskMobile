const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  require("./getUser")
);

router.get("/verify/:uniqueString", require("./verify"));

router.get(
  "/isVerified",
  passport.authenticate("jwt", { session: false }),
  require("./isVerified")
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

router.get(
  "/followers",
  passport.authenticate("jwt", { session: false }),
  require("./getFollowers")
);

router.get(
  "/numfollowers",
  passport.authenticate("jwt", { session: false }),
  require("./getNumFollowers")
);
router.get(
  "/numfollowings",
  passport.authenticate("jwt", { session: false }),
  require("./getNumFollowings")
);

router.get(
  "/followings",
  passport.authenticate("jwt", { session: false }),
  require("./getFollowings")
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
