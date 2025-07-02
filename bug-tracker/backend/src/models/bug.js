const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['open', 'in-progress', 'resolved'],
        default: 'open',
    },
}, { timestamps: true });

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;