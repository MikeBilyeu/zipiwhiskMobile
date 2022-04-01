const pool = require("../../config/db");

module.exports = async ({ query: { email } }, res) => {
  try {
    pool.query(
      "SELECT * FROM users WHERE email = ?",
      email.toLowerCase(),
      (err, results) => {
        if (err) throw err;
        if (results[0]) {
          return res.status(409).json({
            type: "email",
            message: "Sorry, We already have this email in our database.",
          });
        }

        return res.status(200).json("Email is available");
      }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
};
