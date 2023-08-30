// import mongoose module
const mongoose = require("mongoose");

// create player Schema avec mongoose
const playerSchema = mongoose.Schema({
    name : String,
    age : Number,
    position : String
});

// Affect model name Schema
const player = mongoose.model("Player", playerSchema);

// export player
module.exports = player;