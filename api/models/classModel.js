const mongoose = require("mongoose");
const SessionSchema = require("./sessionModel")

const ClassSchema = new mongoose.Schema({
    session: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Session'
    },
    name: {
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
}, {
    timestamps: true
});

module.exports = mongoose.model("Class", ClassSchema)