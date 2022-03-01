const pool = require("../../config/db");

module.exports = async (req, res) => {
  const { id } = req.user; // Get user_id from auth
  console.log(id);
  pool.query(
    "SELECT * FROM verifications WHERE user_id = ? AND verified = 1",
    id,
    async (err, results) => {
      if (err) throw err;
      try {
        if (results[0]) {
          console.log("verified");
          return res.status(200).send("verified");
        }
        console.log("not verified");
        return res.status(403).send("not verified");
      } catch (err) {
        res.status(500).json(err);
      }
    }
  );
};
