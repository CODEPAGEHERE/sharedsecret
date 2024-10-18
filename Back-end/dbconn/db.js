const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'diarydb'
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Error connecting to MariaDB / diarydb:', err.message);
    return;
  }
  console.log('Connected to MariaDB / diarydb!');
});

module.exports = db;
