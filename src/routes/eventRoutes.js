const express = require('express');
const Event = require('../models/Event');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

// 1. PUBLIC: Get all events (with filters)
router.get('/', async (req, res) => {
  const query = {};
  if (req.query.category) query.category = req.query.category;
  if (req.query.dateYear) query.dateYear = req.query.dateYear;
  if (req.query.dateMonth) query.dateMonth = req.query.dateMonth;
  if (req.query.dateDay) query.dateDay = req.query.dateDay;
  try {
    const events = await Event.find(query);
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. PUBLIC: Get all unique categories (for frontend filters)
router.get('/categories/list', async (req, res) => {
  try {
    const categories = await Event.distinct('category');
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. PUBLIC: Get single event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event) res.json(event);
    else res.status(404).json({ error: "Event not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. ADMIN: Create event
router.post('/', protect, admin, async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 5. ADMIN: Update event
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (event) res.json(event);
    else res.status(404).json({ error: "Event not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 6. ADMIN: Delete event
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (event) res.json({ message: "Event deleted" });
    else res.status(404).json({ error: "Event not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
console.log('Event routes loaded');

module.exports = router;
