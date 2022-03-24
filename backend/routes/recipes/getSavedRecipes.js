const pool = require("../../config/db");

module.exports = async (req, res) => {
  const { user_id } = req.query;

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
      COUNT(us.user_id) > 0 AS saved,
      COUNT(tus.user_id) AS numLikes,
      COUNT(c.id) AS numComments
      FROM recipes r
      INNER JOIN users_recipes ur ON ur.recipe_id = r.id
      INNER JOIN users u ON u.id = ur.user_id
      LEFT JOIN users_saves us ON us.recipe_id = r.id AND us.user_id = ? 
      LEFT JOIN users_saves tus ON tus.recipe_id = r.id
      LEFT JOIN comments c ON c.recipe_id = r.id
      WHERE r.id IN (SELECT recipe_id FROM users_saves WHERE user_id = ?) 
      OR  r.id IN (SELECT recipe_id FROM users_recipes WHERE user_id = ?)
      GROUP BY r.id
      ORDER BY 
      CASE WHEN u.id = ? THEN r.created_at
      ELSE us.created_at END DESC
      LIMIT 18`,
      [user_id, user_id, user_id, user_id],
      (err, results) => {
        if (err) throw err;

        let recipes = [...results];

        for (const [i, r] of results.entries()) {
          pool.query(
            `SELECT
          c.*,
          COUNT(cl.comment_id) AS numLikes
          FROM comments c
          LEFT JOIN comments_likes cl ON cl.comment_id = c.id
          WHERE recipe_id = ?
          GROUP BY c.id
          ORDER BY numLikes DESC
          LIMIT 15;`,
            [r.id],
            (err, results) => {
              if (err) throw err;
              recipes[i].comments = results;

              if (i >= recipes.length - 1) {
                return res.status(200).json(recipes);
              }
            }
          );
        }
      }
    );
  } catch (err) {
    return res.status(401);
  }
};
