// import mongoose module
const mongoose = require("mongoose");

 // create match Schema avec mongoose
 const matchSchema = mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String
 });

 // Affect model name Schema
 const match = mongoose.model("Match", matchSchema);

 // export match
 module.exports = match;

