const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bookclub',
});

mysqlConnection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('DB connected');
});
module.exports = mysqlConnection;
