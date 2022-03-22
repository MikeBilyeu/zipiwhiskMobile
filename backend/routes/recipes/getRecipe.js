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

// SELECT
//       r.*,
//       u.id AS user_id,
//       u.username,
//       u.image_url,
//       COUNT(us.user_id = 2) AS saved,
//       COUNT(us.user_id) AS num_saves,
//       COUNT(c.id) AS num_comments
//       FROM recipes r
//       INNER JOIN users_recipes ur ON ur.recipe_id = r.id
//       INNER JOIN users u ON u.id = ur.user_id
//       LEFT JOIN users_saves us ON us.recipe_id = r.id
//       LEFT JOIN comments c ON c.recipe_id = r.id
//       WHERE r.id = 159;

// SELECT
// r.*,
// u.id AS created_by,
// r.created_at,
// u.username,
// us.created_at AS saved_at,
// COUNT(us.user_id) AS saved,
// COUNT(tus.user_id) AS num_saves,
// COUNT(c.id) AS num_comments
// FROM recipes r
// INNER JOIN users_recipes ur ON ur.recipe_id = r.id
// INNER JOIN users u ON u.id = ur.user_id
// LEFT JOIN users_saves us ON us.recipe_id = r.id AND us.user_id = 2
// LEFT JOIN users_saves tus ON tus.recipe_id = r.id
// LEFT JOIN comments c ON c.recipe_id = r.id
// WHERE r.id IN (SELECT recipe_id FROM users_saves WHERE user_id = 2)
// OR  r.id IN (SELECT recipe_id FROM users_recipes WHERE user_id = 2)
// GROUP BY r.id
// ORDER BY
// CASE WHEN u.id = 2 THEN r.created_at
// ELSE us.created_at END DESC;
