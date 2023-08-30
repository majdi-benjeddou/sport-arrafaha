// import mongoose module
const mongoose = require("mongoose");

// create stadium Schema avec mongoose
const stadiumSchema = mongoose.Schema({
    name : String,
    capacity : Number,
    country : String
});

// Affect model name Schema
const stadium = mongoose.model("Stadium", stadiumSchema);

// export stadium
module.exports = stadium;