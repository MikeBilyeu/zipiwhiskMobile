const pool = require("../../config/db");

module.exports = async (req, res) => {
  const follower_id = req.user.id;
  const { following_id } = req.body;

  try {
    pool.query(
      "DELETE FROM follows WHERE following_id = ? AND follower_id = ?",
      [following_id, follower_id],
      (err, results, fields) => {
        if (err) throw err;
        return res.status(201).send("ok");
      }
    );
  } catch (err) {
    return res.status(400).json(err);
  }
};
