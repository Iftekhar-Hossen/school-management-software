const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["super-admin", "admin", "teacher"],
    },
    phone: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        required: true,
    }
});


const userModel = mongoose.model("user", userSchema)

module.exports = userModel