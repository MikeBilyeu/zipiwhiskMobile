const pool = require("../../config/db");

module.exports = async (req, res) => {
  const { id: user_id } = req.user;
  const { recipe_id } = req.body;

  try {
    pool.query(
      "INSERT INTO users_likes (user_id, recipe_id) VALUES (?, ?)",
      [user_id, recipe_id],
      (err, results) => {
        if (err) throw err;
        return res.status(200).send("ok");
      }
    );
  } catch (err) {
    return res.status(400).json(err);
  }
};
