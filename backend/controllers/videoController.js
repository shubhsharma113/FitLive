const Video = require('../models/Video');

// @desc    Get all videos
// @route   GET /api/videos
// @access  Private
const getVideos = async (req, res) => {
    try {
        const category = req.query.category;
        const filter = category ? { category } : {};
        
        const videos = await Video.find(filter);
        res.json(videos);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Add a video
// @route   POST /api/videos
// @access  Private/Admin
const addVideo = async (req, res) => {
    try {
        const video = await Video.create(req.body);
        res.status(201).json(video);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = { getVideos, addVideo };
