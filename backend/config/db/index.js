const mysql = require("mysql");
const keys = require("../keys");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: keys.host,
  user: keys.user,
  password: keys.password,
  database: keys.database,
});

module.exports = pool;
