"use strict";

var express = require('express');

var cors = require('cors');

var db = require('./dbconn/db'); // Ensure this file handles your DB connection


var diaryEntriesRoutes = require('./mapp/diaryentries'); // Import your diary entries routes


var app = express();
var port = process.env.PORT || 3000; // Middleware to parse JSON bodies

app.use(cors()); // Enable CORS

app.use(express.json()); // Middleware to parse JSON bodies
// Basic route for testing

app.get('/', function (req, res) {
  res.send('Diary App Backend is running');
}); // Use the diary entries routes

app.use('/diary-entries', diaryEntriesRoutes); // Set the base route for diary entries
// Start the server

app.listen(port, function () {
  console.log("Server is running on port ".concat(port));
});