var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Administrator = new Schema(
    {
        email: {
            type: String,
            match: /.+\@.+\..+/,
            unique: [true, "Email is already existed"],
            index: true,
            lowercase: true,
            trim: true,
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
            type: [String],
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
            default: "https://img.icons8.com/ios-glyphs/256/user.png",
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
