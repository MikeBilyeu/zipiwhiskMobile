const pool = require("../../config/db");

module.exports = async (req, res) => {
  const { id } = req.user; // Get user_id from auth
  const { username, fullname, restriction, image_url } = req.body;
  console.log(restriction);

  try {
    pool.query(
      `UPDATE users SET username = ?, fullname = NULLIF(?, ''), image_url = ? WHERE id = ?`,
      [username, fullname, image_url, id],
      async (error, results, fields) => {
        try {
          if (error) throw error;
          return res.status(200).end();
        } catch (err) {
          console.log(err);
          return res.status(400);
        }
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
