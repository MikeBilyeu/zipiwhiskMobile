const pool = require("../../config/db");

module.exports = async (req, res) => {
  // either get the id from params or auth
  const id = req.query.id ? req.query.id : req.user.id;
  // user id from auth
  const follower_id = req.user.id;

  try {
    pool.query(
      `SELECT 
      id, 
      username, 
      fullname, 
      email, 
      image_url, 
      COUNT(DISTINCT f.follower_id) AS isfollowing,
      COUNT(DISTINCT followers.follower_id) AS num_followers,
      COUNT(DISTINCT followings.following_id) AS num_followings,
      ur.restriction AS restriction 
      FROM users u 
      LEFT JOIN follows f 
      ON u.id = f.follower_id AND f.following_id = ?
      LEFT JOIN follows followers
      ON u.id = followers.following_id
      LEFT JOIN follows followings
      ON u.id = followings.follower_id
      LEFT JOIN users_restrictions ur
      ON u.id = ur.user_id
      WHERE u.id = ?;`,
      [follower_id, id],
      async (error, results, fields) => {
        if (error) throw error;
        if (!results) {
          return res.status(401);
        }
        console.log(results[0]);
        res.status(200).json(results[0]);
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
};
