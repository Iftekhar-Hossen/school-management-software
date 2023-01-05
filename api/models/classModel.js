const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    sections: [
        {
            teacher: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Administrator",
            },
            name: {
                type: String,
                required: true,
            },
            students: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Student",
                },
            ],
            capacity: {
                type: Number,
                default: 0,
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Class", ClassSchema);
