const pool = require("../../config/db");

module.exports = async ({ query: { email } }, res) => {
  pool.query(
    "SELECT * FROM users WHERE email = ?",
    email.toLowerCase(),
    (error, results) => {
      try {
        if (error) throw error;
        if (results[0]) {
          return res.status(409).json({
            type: "email",
            message: "Sorry, We already have this email in our database.",
          });
        }
        return res.status(200).json("Email is available");
      } catch (err) {
        res.status(500).json(err);
      }
    }
  );
};
