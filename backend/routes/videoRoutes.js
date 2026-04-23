const express = require('express');
const router = express.Router();
const { getVideos, addVideo } = require('../controllers/videoController');
const { protect, admin } = require('../middleware/auth');

router.route('/').get(protect, getVideos).post(protect, admin, addVideo);

module.exports = router;
