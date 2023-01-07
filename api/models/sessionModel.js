const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Session name is required"],
    },
    startDate: {
        type: Date,
                required: [true, "Session starting date is required"],

    },
    endDate: {
        type: Date,
                required: [true, "Session ending date is required"],
        
    },
});



module.exports = mongoose.model("session", SessionSchema);
