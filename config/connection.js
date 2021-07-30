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
    password: "moz12345",
    database: 'employeedb'
  },
  console.log(`sucessfully Connected to EmployeeDB database.`)
);

module.exports = connection;
