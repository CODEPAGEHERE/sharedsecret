const express = require('express');
const cors = require('cors');
const db = require('./dbconn/db'); // Ensure this file handles your DB connection
const diaryEntriesRoutes = require('./mapp/diaryentries'); // Import your diary entries routes

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON bodies

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Diary App Backend is running');
});

// Use the diary entries routes
app.use('/diary-entries', diaryEntriesRoutes); // Set the base route for diary entries

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
