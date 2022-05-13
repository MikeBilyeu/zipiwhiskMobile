const pool = require("../../config/db");

module.exports = async (req, res) => {
  const { id: user_id } = req.user;
  let { recipeId, comment, parentCommentId } = req.body;

  let mentionsUsername = comment.match(/(?<=@)[a-zA-Z0-9._]*/gim);
  console.log(mentionsUsername);

  try {
    pool.query(
      `INSERT INTO comments (user_id, recipe_id, comment, parent_comment_id) VALUES (?, ?, ?, ?)`,
      [user_id, recipeId, comment, parentCommentId],
      (err, { insertId }) => {
        if (err) throw err;

        mentionsUsername.forEach((username) => {
          pool.query(
            `INSERT INTO comments_mentions (user_id, comment_id, mentions_user_id) 
             SELECT ?, ?, (SELECT id FROM users WHERE username = ?)
             WHERE EXISTS (SELECT * FROM users WHERE username = ?)`,
            [user_id, insertId, username, username],
            (err) => {
              if (err) throw err;
            }
          );
        });
        return res.status(200).send("ok");
      }
    );
  } catch (err) {
    return res.status(400).json(err);
  }
};
