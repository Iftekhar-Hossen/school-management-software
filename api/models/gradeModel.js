const mongoose = require("mongoose")
const SectionSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Grade name is required"],
        },
               
}, {
    timestamps: true
});

module.exports = mongoose.model("Section", SectionSchema)