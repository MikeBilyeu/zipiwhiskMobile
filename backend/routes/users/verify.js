const pool = require("../../config/db");

module.exports = async (req, res) => {
  console.log(req.params.uniqueString);
  const { uniqueString } = req.params;

  try {
    pool.query(
      `UPDATE verifications SET verified = 1 WHERE token = ?`,
      [uniqueString],
      async (error, results, fields) => {
        try {
          if (error) throw error;
          return res.redirect("/");
          //return res.status(200).end();
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
