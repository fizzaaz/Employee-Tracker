// Import and require mysql2
const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: process.env.MYSQL_PASSWORD,
    database: 'EmployeeDB'
  },
  console.log(`sucessfully Connected to EmployeeDB database.`)
);

module.exports = connection;
