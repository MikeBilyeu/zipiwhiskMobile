const pool = require("../../config/db");

module.exports = async (req, res) => {
  const follower_id = req.user.id;
  const { following_id } = req.body;

  pool.query(
    "DELETE FROM follows WHERE following_id = ? AND follower_id = ?",
    [following_id, follower_id],
    (error, results, fields) => {
      try {
        if (error) throw error;
        res.status(201).send("Success");
      } catch (err) {
        res.status(400).json(err);
      }
    }
  );
};