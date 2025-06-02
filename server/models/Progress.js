const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true },
  status: { type: String, enum: ['not-started', 'in-progress', 'completed'], default: 'not-started' },
});

module.exports = mongoose.model('Progress', progressSchema);