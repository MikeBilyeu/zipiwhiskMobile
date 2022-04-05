const pool = require("../../config/db");

module.exports = async (req, res) => {
  const { id: user_id } = req.user;
  let { recipeId, comment, parentCommentId } = req.body;

  try {
    pool.query(
      "INSERT INTO comments (user_id, recipe_id, comment, parent_comment_id) VALUES (?, ?, ?, ?)",
      [user_id, recipeId, comment, parentCommentId],
      (err, { insertId }) => {
        if (err) throw err;
        return res.status(200).send("ok");
      }
    );
  } catch (err) {
    return res.status(400).json(err);
  }
};
