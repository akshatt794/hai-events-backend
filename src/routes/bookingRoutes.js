const express = require('express');
const router = express.Router();
const { bookEvent, getMyBookings } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

// Book an event (POST)
router.post('/', protect, bookEvent);

// Get my bookings (GET)
router.get('/', protect, getMyBookings);

module.exports = router;
