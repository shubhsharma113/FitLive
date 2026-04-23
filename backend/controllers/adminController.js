const Gym = require('../models/Gym');
const User = require('../models/User');

// @desc    Create a new gym
// @route   POST /api/admin/gym
// @access  Private/Admin
const createGym = async (req, res) => {
    try {
        const gym = await Gym.create(req.body);
        res.status(201).json(gym);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Get all gyms
// @route   GET /api/admin/gyms
// @access  Private
const getGyms = async (req, res) => {
    try {
        const gyms = await Gym.find({});
        res.json(gyms);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Get all users for admin
// @route   GET /api/admin/users
// @access  Private/Admin
const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = { createGym, getGyms, getUsers };
