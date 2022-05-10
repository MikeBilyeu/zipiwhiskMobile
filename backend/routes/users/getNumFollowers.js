const pool = require("../../config/db");

module.exports = async (req, res) => {
  const id = req.user.id;

  try {
    pool.query(
      `SELECT COUNT(*) totalNum
      FROM follows 
      WHERE following_id = ?`,
      [id],
      async (err, results) => {
        if (err) throw err;
        if (!results) {
          return res.status(401).end();
        }
        return res.status(200).json(results[0].totalNum);
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
};
