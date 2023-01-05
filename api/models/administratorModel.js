var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Administrator = new Schema(
    {
        email: {
            type: String,
            match: /.+\@.+\..+/,
            unique: [true, "Email is already existed"],
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
            enum: ["super_admin", "admin", "teacher", "liberian", "accountant"],
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: [true, "Phone number is already in use"],
        },
        profilePicture: {
            type: String,
            default:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        fathersName: {
            type: String,
            required: true,
        },
        mothersName: {
            type: String,
            required: true,
        },
        joiningDate: {
            type: Date,
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
        bankAccountName: {
            type: String,
        },
        bankAccountNumber: {
            type: String,
        },
        bankName: {
            type: String,
        },
        bankBranchName: {
            type: String,
        },
        joiningLetterURL: {
            type: String,
        },
        othersDocumentURL: {
            type: String,
        },
        administratorId: {
            type: String,
            required: true,
            unique: true,
        },
        addedBy: {
            type: Object,
            required: true,
        },
        classes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Class",
            },
        ],
    },
    { timestamps: true },
);

const administratorModel = mongoose.model("Administrator", Administrator);
module.exports = administratorModel;
