const mongoose = require("mongoose")

const AccountTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Account type name is required"]
    },
    status:{
        type: Boolean,
        required: [true, "Account type status is required"]
    }
}, {timestamps: true})


module.exports = mongoose.model("AccountType", AccountTypeSchema)