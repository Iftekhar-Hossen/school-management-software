const mongoose = require("mongoose");

const classRoutineSchema = new mongoose.Schema({
    session: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session",
        required: [true, "Session is requited"],
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
        required: [true, "Section is requited"],
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: [true, "Teacher is requited"],
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: [true, "Subject is requited"],
    },
    day: {
        type: String,
        enum: ["sat", "sun", "mon", "tue", "wed", "thu", "fri"],
        required: [true, "Day is required"],
    },
    startingTime: {
        type: Date,
        requited: [true, "Class startingTime is required"],
    },
    endingTime: {
        type: Date,
        requited: [true, "Class startingTime is required"],
    },
    isBreak: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("classRoutine", classRoutineSchema);
