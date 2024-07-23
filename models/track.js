const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  artist: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
});

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;
