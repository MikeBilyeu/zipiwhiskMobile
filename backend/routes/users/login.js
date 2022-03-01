const pool = require("../../config/db");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = async ({ query: { username, password } }, res) => {
  const usernameOrEmail = username.toLowerCase();

  pool.query(
    `SELECT * FROM users WHERE username = ? OR email = ?`,
    [usernameOrEmail, usernameOrEmail],
    async (error, results) => {
      try {
        if (error) throw error;

        const user = results[0];

        if (!user) {
          return res.status(403).json({
            type: "username",
            message:
              "Sorry, We can't find an account with that username or email.",
          });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password_encrypted);
        if (isMatch) {
          // Create JWT Payload
          const payload = { id: user.id };

          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926, // 1 year in seconds
            },
            (err, token) => {
              if (err) throw err;
              // Check email verification
              return res.status(200).json({
                success: true,
                token: "Bearer " + token,
              });
            }
          );
        } else {
          return res
            .status(403)
            .json({ type: "password", message: "Sorry, Incorrect password" });
        }
      } catch (err) {
        res.status(500).json(err);
      }
    }
  );
};
