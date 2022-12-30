const mongoose = require("mongoose")
const Schema = mongoose.Schema

const studentSchema = new Schema({
    studentId: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    fristName: {
        type: String
    }
    ,
    lastName: {
        type: String
    },
    profilePicture: {
        type: String
    },
    password: {
        type: String
    },
    admitClass: {
        type: String,
        section: String,
        roll: Number,
        year: Date,
    },
    currentClass: {
        type: String,
        section: String,
        roll: Number,
        year: Date,
    },
    
},
{
    timestamps: true,
}
)

const studentModel = mongoose.model("Student", studentSchema)

module.exports = studentModel