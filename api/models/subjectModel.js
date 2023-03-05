const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Subject name is requited"],
    },
    code: {
        type: String,
        required: [true, "Subject code is required"],
    },
});

module.exports = mongoose.model("Subject", SubjectSchema);