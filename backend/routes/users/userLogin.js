const pool = require("../../config/db");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
//const validateLoginInput = require("../../validation/login");

module.exports = async ({ body: { username, password } }, res) => {
  // Form validation
  //const errors = validateLoginInput(req.body);
  // checking if login validator has errors

  //   if (Object.keys(errors).length !== 0) {
  //     return res.status(400).json(errors);
  //   }
  username = username.toLowerCase();

  pool.query(
    `SELECT * FROM users WHERE username = ? OR email = ?`,
    [username, username],
    async (error, results, fields) => {
      try {
        if (error) throw error;

        const user = results[0];

        if (!user) {
          throw {
            status: 403,
            type: "username",
            message:
              "Sorry, We can't find an account with that username or email.",
          };
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
              res.status(200).json({
                success: true,
                token: "Bearer " + token,
              });
            }
          );
        } else {
          throw {
            status: 403,
            type: "password",
            message: "Sorry, Incorrect password",
          };
        }
      } catch (err) {
        if (err.status === 403) {
          return res.status(403).json(err);
        }

        res.status(500).json(err);
      }
    }
  );
};
