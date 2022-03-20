const pool = require("../../config/db");

module.exports = async (req, res) => {
  const { recipe_id } = req.query;
  const { id: user_id } = req.user;

  try {
    pool.query(
      `SELECT
      r.*,
      u.id AS user_id,
      u.username,
      u.image_url,
      COUNT(us.user_id = ?) AS saved,
      COUNT(us.user_id) AS num_saves,
      COUNT(c.id) AS num_comments
      FROM recipes r
      INNER JOIN users_recipes ur ON ur.recipe_id = r.id
      INNER JOIN users u ON u.id = ur.user_id
      LEFT JOIN users_saves us ON us.recipe_id = r.id
      LEFT JOIN comments c ON c.recipe_id = r.id
      WHERE r.id = ?`,
      [user_id, recipe_id],
      (err, results) => {
        if (err) throw err;
        return res.status(200).json(results[0]);
      }
    );
  } catch (err) {
    return res.status(401);
  }
};
