const express = require('express');
const router = express.Router();
const { createGym, getGyms, getUsers } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/auth');

router.route('/gyms').get(protect, getGyms).post(protect, admin, createGym);
router.route('/users').get(protect, admin, getUsers);

module.exports = router;
