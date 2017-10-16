const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true, unique: true },
  youtubeId: { type: String, required: true },
  description: { type: String, trim: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Video', videoSchema);
