const pool = require("../../config/db");

module.exports = async (req, res) => {
  const { id: user_id } = req.user;
  const { recipe_id } = req.body;

  try {
    pool.query(
      "DELETE FROM users_saves WHERE user_id = ? AND recipe_id = ?",
      [user_id, recipe_id],
      (err, results) => {
        if (err) throw err;
        return res.status(200);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
