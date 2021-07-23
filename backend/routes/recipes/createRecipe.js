const pool = require("../../config/db");

module.exports = async (req, res) => {
  const { id } = req.user;
  const { recipe } = req.body;

  console.log("userID: ", id);
  console.log("recipeData: ", recipe);

  res.status(200).send("ok");
};
