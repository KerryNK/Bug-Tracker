const express = require('express');
const router = express.Router();
const bugController = require('../controllers/bugController');

// Route to create a new bug
router.post('/', bugController.createBug);

// Route to get all bugs
router.get('/', bugController.getBugs);

// Route to update a bug by ID
router.put('/:id', bugController.updateBug);

// Route to delete a bug by ID
router.delete('/:id', bugController.deleteBug);

module.exports = router;