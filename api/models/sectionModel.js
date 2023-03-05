const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    },
    admissionId: {
        type: String,
        required: true
    },
    classRoll: {
        type: Number,
        required: true
    }
});


const SectionSchema = new mongoose.Schema(
    {
        teacher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Administrator",
        },
        name: {
            type: String,
            required: [true, "Section name is required"],
        },
        students: [StudentSchema],

        capacity: {
            type: Number,
            default: 0,
        },
        currentStudents: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    },
);

SectionSchema.pre("save", function (next) {
    this.currentStudents = this.students.length;
    this.markModified("students");
    next();
});

module.exports = mongoose.model("Section", SectionSchema);
