const mongoose = require("mongoose")
const SectionSchema = new mongoose.Schema({
                class: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Class",
                }
                teacher: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Administrator",
                },
                name: {
                    type: String,
                    required: [true, "Section name is required"],
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
}, {
    timestamps: true
});

module.exports = mongoose.model("Section", SectionSchema)