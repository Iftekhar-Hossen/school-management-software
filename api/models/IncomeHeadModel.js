const mongoose = require("mongoose")

const IncomeHeadSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Expense head name is requited"]
    }
}, {timestamps: true})

module.exports = mongoose.model("IncomeHead", IncomeHeadSchema)