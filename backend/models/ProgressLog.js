const mongoose = require('mongoose');

const progressLogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    weight: {
        type: Number,
        required: true
    },
    bodyFatPercentage: Number,
    chest: Number,
    waist: Number,
    arms: Number,
    legs: Number,
    notes: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const ProgressLog = mongoose.model('ProgressLog', progressLogSchema);
module.exports = ProgressLog;
