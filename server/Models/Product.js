const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: String,
        detail: String,
        price: Number,
        file: {
            type: String,
            default: "no-image.jpg",
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("products", productSchema);
