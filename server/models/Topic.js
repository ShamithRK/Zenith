const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  videoUrl: String,
  resources: [String],
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  order: Number,
});

module.exports = mongoose.model('Topic', topicSchema);