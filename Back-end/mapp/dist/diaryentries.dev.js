"use strict";

var express = require('express');

var router = express.Router(); // Example endpoint

router.get('/diary-entries', function (req, res) {
  res.send('This is the diary entries endpoint');
});
module.exports = router; // Export the router instance