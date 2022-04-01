const pool = require("../../config/db");

module.exports = async (req, res) => {
  const { uniqueString } = req.params;

  try {
    pool.query(
      `UPDATE verifications SET verified = 1 WHERE token = ?`,
      [uniqueString],
      async (err, results) => {
        if (err) throw err;
        return res.status(200).send("Email Verified!");
      }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
};
