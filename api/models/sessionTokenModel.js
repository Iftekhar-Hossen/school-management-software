const mongoose = require("mongoose")
const Schema = mongoose.Schema


const sessionTokenSchema = new Schema({
    email: {
        type: String
    },
    userId: {
        type: String
    },
    profilePicture: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    token: {
        type: String
    },

},
    {
        timestamps: true,
    })


const sessionTokenModel = mongoose.model("sessionToken", sessionTokenSchema)

module.exports = sessionTokenModel

