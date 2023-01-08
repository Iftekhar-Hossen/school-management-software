const mongoose = require("mongoose");
const SessionSchema = require("./sessionModel")

const ClassSchema = new mongoose.Schema({
    session: {
               type: String,
               required: [true, "Session id is required"]
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
            currentStudents:{
                type: Number,

            }
        },
    ],
}, {
    timestamps: true
});

ClassSchema.pre('save', function(next) {
  this.currentStudents = this.students.length;
  this.markModified('students');
  next();
});


module.exports = mongoose.model("Class", ClassSchema)