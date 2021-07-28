// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'moz12345',
    database: 'EmployeeDB'
  },
  console.log(`Connected to the inventory_db database.`)
);