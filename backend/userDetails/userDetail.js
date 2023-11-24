const express = require('express');
const router = express.Router();
const userData= require('./userModel');

// Example route to get all items
router.get('/items', async (req, res) => {
  try {
    const items = await userData.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Other routes for creating, updating, and deleting items

module.exports = router;
