"use strict";

var mysql = require('mysql2'); // Create a connection to the database


var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'diarydb'
}); // Connect to the database

db.connect(function (err) {
  if (err) {
    console.error('Error connecting to MariaDB / diarydb:', err.message);
    return;
  }

  console.log('Connected to MariaDB / diarydb!');
});
module.exports = db;