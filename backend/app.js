const express = require("express");
const app = express();
const passport = require("passport");
require("./config/passport")(passport);
const port = 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(passport.initialize());

// API Routes
app.use(require("./routes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
