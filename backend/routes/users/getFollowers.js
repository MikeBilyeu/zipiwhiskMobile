const pool = require("../../config/db");

module.exports = async (req, res) => {
  const id = req.user.id;

  try {
    pool.query(
      `SELECT u.id, 
      u.image_url, 
      u.username, 
      u.fullname,
      (SELECT COUNT(*) > 0 FROM follows WHERE follower_id = ? AND following_id = u.id) isFollowing,
      f.created_at 
      FROM follows f 
      LEFT JOIN users u ON u.id = f.follower_id 
      WHERE following_id = ?
      ORDER BY f.created_at DESC`,
      [id, id],
      async (err, results) => {
        if (err) throw err;
        if (!results) {
          return res.status(401).end();
        }
        return res.status(200).json(results);
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
};
