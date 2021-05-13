const pool = require("../../config/db");

module.exports = async (req, res) => {
  const { id } = req.user; // Get user_id from auth
  console.log(req.user);
  try {
    pool.query(
      `SELECT id, username, fullname, email, image_url FROM users WHERE id = ?`,
      id,
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
