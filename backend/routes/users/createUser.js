const pool = require("../../config/db");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const emailVerification = require("./emailVerification");
const { v4: uuidv4 } = require("uuid");
//const validateRegisterInput = require("../../validation/register");

module.exports = async ({ body: { username, email, password } }, res) => {
  email = email.toLowerCase();
  username = username.toLowerCase();
  const uniqueString = uuidv4();

  // //VALIDATION
  //   const errors = validateRegisterInput({ username, email, password });
  //   if (Object.keys(errors).length !== 0) {
  //     res.status(400).send(errors);
  //   }

  pool.query("SELECT * FROM users WHERE email = ?", email, (error, results) => {
    try {
      if (results[0]) {
        throw {
          status: 409,
          type: "email",
          message: "This email is alreay taken.",
        };
      }
    } catch (err) {
      if (err.status === 409) {
        return res.status(409).json(err);
      }
    }
  });

  pool.query(
    "SELECT * FROM users WHERE username = ?",
    username,
    (err, results) => {
      try {
        if (results[0]) {
          throw {
            status: 409,
            type: "username",
            message: "This username is alreay taken.",
          };
        }
      } catch (err) {
        if (err.status === 409) {
          return res.status(409).json(err);
        }
      }
    }
  );

  const password_encrypted = await bcrypt.hash(password, 10);

  const user = {
    email,
    username,
    password_encrypted,
  };

  pool.query("INSERT INTO users SET ?", user, (error, results) => {
    try {
      if (err) throw err;
      const user_id = results.insertId;

      pool.query(
        "INSERT INTO users_restrictions (user_id) VALUES (?)",
        user_id,
        (err, results) => {
          if (err) throw err;

          pool.query(
            "INSERT INTO verifications (user_id, token) VALUES (?, ?)",
            [user_id, uniqueString],
            (err, results) => {
              if (err) throw err;
              emailVerification(email, uniqueString);
              res.status(201).send(`User added with ID: ${user_id}`);
            }
          );
        }
      );
    } catch (err) {
      return res.status(400).json(err);
    }
  });
};
