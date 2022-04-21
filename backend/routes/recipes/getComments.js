const pool = require("../../config/db");
const nestChildComments = require("../../utils/nestChildComments");

module.exports = async (req, res) => {
  const { recipe_id } = req.query;
  const { id: user_id } = req.user;

  try {
    pool.query(
      `SELECT
        root.*,
        u.username, 
        u.image_url,
        COUNT(cl.comment_id) AS numLikes
        FROM comments root
        LEFT JOIN comments_likes l ON l.user_id = ?
        LEFT JOIN comments_likes cl ON cl.comment_id = root.id
        INNER JOIN users u ON u.id = root.user_id
        WHERE recipe_id = ? 
        GROUP BY root.id
        ORDER BY numLikes DESC, root.created_at DESC`,
      [user_id, recipe_id],
      (err, results) => {
        if (err) throw err;
        return res.status(200).json(nestChildComments(results));
      }
    );
  } catch (err) {
    return res.status(401).json(err);
  }
};
