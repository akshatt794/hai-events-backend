const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dateDay: String,
  dateMonth: String,
  dateYear: String,
  category: String,
  location: String,
  image: String,
  description: String,
  extraInfo: [String] // For lists like viewing locations, performers, etc.
});

module.exports = mongoose.model('Event', eventSchema);
