const express = require('express');
const router = express.Router();
const { addProgressLog, getProgressLogs, markAttendance, getAttendanceHistory } = require('../controllers/trackingController');
const { protect } = require('../middleware/auth');

router.route('/progress').get(protect, getProgressLogs).post(protect, addProgressLog);
router.route('/attendance').get(protect, getAttendanceHistory).post(protect, markAttendance);

module.exports = router;
