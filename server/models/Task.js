const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  timeSpent: Number,
  priority: String,
  reference: String,
  category: {
    type: String,
    enum: ['BAU', 'Ad Hoc', 'Project-Based'],
  },
  date: { type: Date, default: Date.now },
  attachments: [String],
});

module.exports = mongoose.model('Task', taskSchema);
