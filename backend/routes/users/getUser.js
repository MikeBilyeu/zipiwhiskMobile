const pool = require("../../config/db");

module.exports = async (req, res) => {
  // either get the id from params or auth
  const id = req.query.id ? req.query.id : req.user.id;
  // user id from auth
  const follower_id = req.user.id;

  try {
    pool.query(
      `SELECT id, 
        username, 
        fullname, 
        email, 
        image_url, 
        COUNT(f.follower_id) AS following,
        ur.restriction AS restriction 
        FROM users u 
        LEFT JOIN follows f 
        ON u.id = f.following_id AND f.follower_id = ?
        LEFT JOIN users_restrictions ur
        ON u.id = ur.user_id
        WHERE u.id = ?;`,
      [follower_id, id],
      async (error, results, fields) => {
        if (error) throw error;
        if (!results) {
          return res.status(401);
        }
        res.status(200).json(results[0]);
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
};
