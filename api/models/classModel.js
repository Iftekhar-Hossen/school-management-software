const mongoose = require("mongoose");
const ClassSchema = new mongoose.Schema(
    {
        session: {
            type: String,
            required: [true, "Session id is required"],
        },
        name: {
            type: String,
            required: [true, "Class name is required"],
        },
        sections: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "Section",
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Class", ClassSchema);
