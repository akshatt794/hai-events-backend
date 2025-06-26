const { Booking, Event } = require('../../models');

// Book an event
exports.bookEvent = async (req, res) => {
  try {
    const { eventId, quantity } = req.body;
    const userId = req.user.id; // Assumes authentication middleware

    // Check if event exists
    const event = await Event.findByPk(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    // Create booking
    const booking = await Booking.create({
      userId,
      eventId,
      quantity,
      status: 'booked'
    });

    res.status(201).json({ message: 'Booking successful', booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// List bookings for logged-in user
exports.getMyBookings = async (req, res) => {
  try {
    const userId = req.user.id;
    const bookings = await Booking.findAll({
      where: { userId },
      include: [Event]
    });
    res.json({ bookings });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
