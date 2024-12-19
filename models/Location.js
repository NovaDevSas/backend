const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  weekdayHours: { type: String, required: true },
  weekendHours: { type: String, required: true }
});

module.exports = mongoose.model('Location', locationSchema);