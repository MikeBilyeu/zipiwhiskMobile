const pool = require("../../config/db");

module.exports = async (req, res) => {
  const { user_id, offsetNum } = req.query;
  const offset = 10 * offsetNum;

  try {
    pool.query(
      `SELECT
      r.id,
      r.recipe_name AS title,
      r.yield AS recipeYield,
      r.ingredients AS ingredientList,
      r.instructions,
      r.created_at,
      r.media_type,
      r.media_url,
      r.caption,
      u.id AS created_by,
      u.image_url user_image_url,
      u.username,
      (SELECT COUNT(*) FROM comments WHERE recipe_id = r.id) numComments,
      (SELECT COUNT(*) FROM users_likes WHERE recipe_id = r.id) numLikes,
      (SELECT COUNT(*) > 0 FROM users_likes WHERE recipe_id = r.id AND user_id = ?) liked,
      (SELECT COUNT(*) FROM users_saves WHERE recipe_id = r.id) numSaves,
      (SELECT COUNT(*) > 0 FROM users_saves WHERE recipe_id = r.id AND user_id = ?) saved
      FROM recipes r
      INNER JOIN users_recipes ur ON ur.recipe_id = r.id
      INNER JOIN users u ON u.id = ur.user_id
      ORDER BY r.created_at DESC, id DESC
      LIMIT 10
      OFFSET ?;
`,
      [user_id, user_id, offset],
      (err, results) => {
        if (err) throw err;
        return res.status(200).json(results);
      }
    );
  } catch (err) {
    return res.status(401).json(err);
  }
};
