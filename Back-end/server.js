const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Diary App Backend is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',  // Replace with your DB host (e.g., '127.0.0.1')
  user: 'root',        // Replace with your DB username
  password: '',        // Replace with your DB password
  database: 'diarydb' // Replace with your database name
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Error connecting to MariaDB:', err.message);
    return;
  }
  console.log('Connected to MariaDB / diarydb!');
});

// Example route to get all stories (replace later with real data)
app.get('/stories', (req, res) => {
  db.query('SELECT * FROM stories', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

const cors = require('cors');
app.use(cors());

