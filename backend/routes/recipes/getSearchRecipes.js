const pool = require("../../config/db");

module.exports = async (req, res) => {
  let { category, searchFilter } = req.query;
  let user_id = req.user.id;

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
      (SELECT COUNT(*) > 0 FROM users_saves WHERE recipe_id = r.id AND user_id = ?) saved,
      (SELECT created_at FROM users_saves WHERE recipe_id = r.id AND user_id = ?) saved_at
      FROM recipes r
      INNER JOIN users_recipes ur ON ur.recipe_id = r.id
      INNER JOIN users u ON u.id = ur.user_id
      WHERE
      CASE WHEN ? != ''
      THEN r.id IN
        (SELECT recipe_id FROM recipes_categories rc WHERE rc.category = ?)
      WHEN ? != ''
      THEN r.id IN 
        (SELECT id FROM recipes WHERE MATCH(recipe_name) AGAINST(?))
        ELSE
        r.id IN (SELECT id FROM recipes)
        END
      ORDER BY numLikes DESC
      LIMIT 18`,
      [
        req.user.id,
        req.user.id,
        user_id,
        category,
        category,
        searchFilter,
        searchFilter,
      ],
      (err, results) => {
        if (err) throw err;
        return res.status(200).json(results);
      }
    );
  } catch (err) {
    return res.status(401).json(err);
  }
};
