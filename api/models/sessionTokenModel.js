const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    objectId: {
        required: true,
        type: String
    },

});

module.exports = mongoose.model("SessionToken", schema);