const pool = require("../../config/db");

module.exports = async (req, res) => {
  const { id } = req.user; // Get user_id from auth
  const { username, fullname } = req.body;
  try {
    pool.query(
      `UPDATE users SET username = ?, fullname = NULLIF(?, '') WHERE id = ?`,
      [username, fullname, id],
      async (error, results, fields) => {
        try {
          if (error) throw error;
          return res.status(200).end();
        } catch (err) {
          return res.status(400);
        }
      }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
};
