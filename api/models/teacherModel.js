const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    classes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
        },
    ],
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Teacher", TeacherSchema);
