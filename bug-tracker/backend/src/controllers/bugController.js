const Bug = require('../models/bug');

// Create a new bug
exports.createBug = async (req, res) => {
    try {
        const bug = new Bug(req.body);
        await bug.save();
        res.status(201).json(bug);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all bugs
exports.getBugs = async (req, res) => {
    try {
        const bugs = await Bug.find();
        res.status(200).json(bugs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a bug
exports.updateBug = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBug = await Bug.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBug) {
            return res.status(404).json({ message: 'Bug not found' });
        }
        res.status(200).json(updatedBug);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a bug
exports.deleteBug = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBug = await Bug.findByIdAndDelete(id);
        if (!deletedBug) {
            return res.status(404).json({ message: 'Bug not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};