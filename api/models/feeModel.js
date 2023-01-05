const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Student'
  },
  feeType: {
    type: String,
    required: true,
    enum: ['tuition', 'lab', 'library', 'other']
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  dueDate: {
    type: Date,
    required: true
  },
  paid: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Fee', schema);
