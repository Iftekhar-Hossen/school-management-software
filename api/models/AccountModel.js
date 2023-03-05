const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Account name is required"],
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AccountType",
    },
    balance: {
        type: Number,
        required: [true, "Account balance is required"],
        default: 0,
    },
    openingDate: {
        type: Date,
        required: [true, "Account opening date is required"],
    },
    status: {
        type: Boolean,
        required: [true, "Account status is required"],
    },
});


module.exports = mongoose.model("Account", AccountSchema)