const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Number,
        required: true,
    },
    class: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
        },
    ],
    email: {
        type: String,
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
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },

    image: {
        type: String,
    },
    parents: {
        father: {
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
            },
            phone: {
                type: String,
                required: true,
            },
            occupation: {
                type: String,
            },
        },
        mother: {
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
            },
            phone: {
                type: String,
                required: true,
            },
            occupation: {
                type: String,
                required: true,
            },
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Student", StudentSchema);
