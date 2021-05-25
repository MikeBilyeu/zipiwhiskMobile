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

  try {
    pool.query(
      `SELECT * FROM users WHERE username = ? OR email = ?`,
      [username, username],
      async (error, results, fields) => {
        if (error) throw error;

        if (!results[0]) {
          res.status(401).json({
            error: "We can't find an account with that username",
          });
        }

        const user = results[0];

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
          res.status(401).json({ password: "Password incorrect" });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};
