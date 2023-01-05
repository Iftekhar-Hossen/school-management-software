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
    createdAt: Date
});
schema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });


module.exports = mongoose.model("SessionToken", schema);
