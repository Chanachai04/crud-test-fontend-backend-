const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: String,
        password: String,
        role: {
            type: String,
            default: "user",
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("users", userSchema);
