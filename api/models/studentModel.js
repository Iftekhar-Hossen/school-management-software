const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Student first name is requried"]

    },
    lastName:{
        type: String,
        required: [true, "Student last name is requried"]
    }
    dateOfBirth: {
        type: Number,
        required: [true, "Student birth day is requried"],
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
    phoneNumber: {
        type: String,
        required: [true, "Student phone number is requried"],
    },
    gender:{
        type: String,
        required: [true, "Student gender is required"]
        enum: ["male", "female"]
    },
    religion:{
        type: String,
        required: [true, "Student religion is required"]
        enum: ["islam", "hinduism", "buddhism", "christianity", "other"]
    }
    ,
    bloodGroup:{
        type: String,
        required: [true, "Blood group is required"]
        enum; ['a+', "a-", "b+", "b-", "o+", "o-", "ab+", "ab-"]
    },


    fathersName:{
        type: String,
        required: [true, "Student father's name is required"]
    },
    mothersName:{
        type: String,
        required: [true, "Student mother's name is required"]
    },


    guardianName:{
        type: String,
        required: [true, "Guardian name is required"]
    },
    guardianPhone:{
        type: String,
        required: [true, "Guardian phone is required"]
    },
    guardianEmail:{
        type: String,
    },
    guardianRelation:{
        type: String,
        required: [true, "Guardian relation with student is required"],
        enum: ["father", "mother", "brother", "sister", "other"]
    },


    presentAddress: {
        type: String,
        required: [true, "Present address is required"],
    },
    permanentAddress: {
        type: String,
        required: [true, "Permanent address is required"],
    },

    image: {
        type: String,
    },


}, {timestamps: true});

module.exports = mongoose.model("Student", StudentSchema);
