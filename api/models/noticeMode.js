const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    targetAudience: {
        type: String,
        required: true,
        enum: ["all", "students", "teachers", "parents"],
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("Notice", schema);
