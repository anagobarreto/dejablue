const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, trime: true, required: true, unique: true },
  description: { type: String, trime: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Video', videoSchema);
