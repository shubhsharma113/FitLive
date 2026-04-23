const ProgressLog = require('../models/ProgressLog');
const Attendance = require('../models/Attendance');

// @desc    Add a progress log
// @route   POST /api/tracking/progress
// @access  Private
const addProgressLog = async (req, res) => {
    const { weight, bodyFatPercentage, chest, waist, arms, legs, notes } = req.body;
    try {
        const log = await ProgressLog.create({
            user: req.user._id,
            weight, bodyFatPercentage, chest, waist, arms, legs, notes
        });
        res.status(201).json(log);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Get user progress logs
// @route   GET /api/tracking/progress
// @access  Private
const getProgressLogs = async (req, res) => {
    try {
        const logs = await ProgressLog.find({ user: req.user._id }).sort({ date: -1 });
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Mark attendance
// @route   POST /api/tracking/attendance
// @access  Private
const markAttendance = async (req, res) => {
    try {
        // Prevent duplicate attendance for the same day
        const today = new Date();
        today.setHours(0,0,0,0);
        
        const existing = await Attendance.findOne({
            user: req.user._id,
            date: { $gte: today }
        });

        if (existing) {
            return res.status(400).json({ message: 'Attendance already marked for today' });
        }

        const attendance = await Attendance.create({ user: req.user._id });
        res.status(201).json(attendance);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Get attendance history
// @route   GET /api/tracking/attendance
// @access  Private
const getAttendanceHistory = async (req, res) => {
    try {
        const history = await Attendance.find({ user: req.user._id }).sort({ date: -1 });
        res.json(history);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = { addProgressLog, getProgressLogs, markAttendance, getAttendanceHistory };
