const express = require('express');
const router = express.Router();

// Example endpoint
router.get('/diary-entries', (req, res) => {
  res.send('This is the diary entries endpoint');
});

module.exports = router; // Export the router instance
