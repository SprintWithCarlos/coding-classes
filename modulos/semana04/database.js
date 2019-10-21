/* eslint-disable no-console */
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'bookclub',
});

mysqlConnection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('DB connected');
});
module.exports = mysqlConnection;
