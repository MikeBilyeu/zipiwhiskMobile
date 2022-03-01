const pool = require("../../config/db");

module.exports = async (req, res) => {
  const { uniqueString } = req.params;

  try {
    pool.query(
      `UPDATE verifications SET verified = 1 WHERE token = ?`,
      [uniqueString],
      async (error, results) => {
        try {
          if (error) throw error;

          return res.status(200).send("Email Verified!");
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
