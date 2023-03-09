const mongoose = require("mongoose");

const cauhinh = mongoose.Schema(
    {
        chedoxemdiem: {
            type: String,
            default: 'All',
            required: true,
        },
    },
    {timestamps: true}
);
module.exports = mongoose.model("Cauhinh",cauhinh);
