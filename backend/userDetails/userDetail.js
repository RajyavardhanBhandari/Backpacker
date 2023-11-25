/*const express = require('express');
const router = express.Router();
const userData = require('./userModel');
 
console.log('Router reached');

// POST route to save user data
router.post('/items', async (req, res) => {
  try {
    const newItem = new userData(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
*/