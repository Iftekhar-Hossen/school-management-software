const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Fee name is required"]
  },
  paymentType:{
    type: String,
    enum: ["oneTime", "monthly", "yearly"]
  }
}, {timestamps: true});

module.exports = mongoose.model('FeeType', schema);
