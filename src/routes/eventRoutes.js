const express = require('express');
const router = express.Router();
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/eventController');
const { protect, admin } = require('../middleware/authMiddleware');

// Add event (Admin)
router.post('/', protect, admin, createEvent);

// List events (Public)
router.get('/', getEvents);

// Update event (Admin)
router.put('/:id', protect, admin, updateEvent);

// Delete event (Admin)
router.delete('/:id', protect, admin, deleteEvent);

module.exports = router;
