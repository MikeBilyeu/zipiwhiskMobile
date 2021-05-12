const mysql = require("mysql");
const keys = require("../keys");
const connection = mysql.createConnection({
  host: keys.host,
  user: keys.user,
  password: keys.password,
  database: keys.database,
});

module.exports = {
  connection,
};
