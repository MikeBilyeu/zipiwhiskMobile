const pool = require("../../config/db");

module.exports = async (req, res) => {
  const id = req.user.id;
  let activity = [];

  try {
    //Follows
    pool.query(
      `SELECT 'follow' type, u.id, u.fullname, u.username, u.image_url, 
    (SELECT COUNT(*) > 0 FROM follows WHERE follower_id = ? AND following_id = u.id) isFollowing,
    f.created_at
    FROM follows f
    LEFT JOIN users u ON u.id = f.follower_id
    WHERE f.following_id = ? 
    ORDER BY f.created_at DESC LIMIT 100;`,
      [id, id],
      async (err, results) => {
        if (err) throw err;
        activity = [...activity, ...results];
        //Likes
        pool.query(
          `SELECT 'like' type, u.id, u.fullname, 
      u.username, u.image_url, 
      ur.recipe_id, r.media_url, 
      ul.created_at
      FROM users_recipes ur
      INNER JOIN users_likes ul ON ul.recipe_id = ur.recipe_id AND ul.user_id != ?
      LEFT JOIN users u ON u.id = ul.user_id
      LEFT JOIN recipes r ON r.id = ur.recipe_id
      WHERE ur.user_id = ?
      ORDER BY ul.created_at DESC 
      LIMIT 100;`,
          [id, id],
          async (err, results) => {
            if (err) throw err;
            activity = [...activity, ...results];
            //Saves
            pool.query(
              `SELECT 'save' type, u.id, u.fullname,
      u.username, u.image_url, ur.recipe_id, r.media_url, us.created_at
      FROM users_recipes ur
      INNER JOIN users_saves us ON us.recipe_id = ur.recipe_id AND us.user_id != ?
      LEFT JOIN users u ON u.id = us.user_id
      LEFT JOIN recipes r ON r.id = ur.recipe_id
      WHERE ur.user_id = ?
      ORDER BY us.created_at DESC 
      LIMIT 100;`,
              [id, id],
              async (err, results) => {
                if (err) throw err;
                activity = [...activity, ...results];
                //Mentions
                pool.query(
                  `SELECT 'mention' type, u.id, u.fullname, 
      u.username, u.image_url, c.comment, r.id, r.media_url, c.created_at
      FROM comments_mentions cm
      LEFT JOIN users u ON u.id = cm.user_id
      LEFT JOIN comments c ON c.id = cm.comment_id
      LEFT JOIN recipes r ON r.id = c.recipe_id
      WHERE cm.mentions_user_id = ? AND cm.user_id != ?
      ORDER BY c.created_at DESC 
      LIMIT 100;`,
                  [id, id],
                  async (err, results) => {
                    if (err) throw err;
                    activity = [...activity, ...results].sort((a, b) => {
                      return new Date(b.created_at) - new Date(a.created_at);
                    });

                    return res.status(200).json(activity);
                  }
                );
              }
            );
          }
        );
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
};
