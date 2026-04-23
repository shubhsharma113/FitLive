const express = require('express');
const router = express.Router();
const { getNearbyGyms } = require('../controllers/mapsController');
const { protect } = require('../middleware/auth');

router.get('/nearby', protect, getNearbyGyms);

module.exports = router;
