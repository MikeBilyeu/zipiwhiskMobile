const pool = require("../../config/db");

module.exports = async ({ query: { username } }, res) => {
  try {
    pool.query(
      "SELECT * FROM users WHERE username = ?",
      username.toLowerCase(),
      (err, results) => {
        if (err) throw err;
        if (results[0]) {
          return res.status(409).json({
            type: "username",
            message: "Sorry, This username is already taken.",
          });
        }
        return res.status(200).json("Username is available");
      }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
};
