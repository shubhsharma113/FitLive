const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    thumbnailUrl: String,
    videoUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['cardio', 'strength', 'flexibility', 'yoga', 'other'],
        required: true
    },
    durationMinutes: Number,
    difficulty: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        default: 'beginner'
    }
}, {
    timestamps: true
});

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;
