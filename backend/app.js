const express = require("express");
const app = express();
const port = 3000;
const connection = require("./config/db");

//Middleware
app.use(express.json());
app.use(express.urlencoded()); //Parse URL-encoded bodies

// API Routes
app.use(require("./routes"));

app.get("/user", (req, res) => {
  console.log(req);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
