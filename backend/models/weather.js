// import mongoose module
const mongoose = require("mongoose");

 // create match Schema avec mongoose
 const weatherSchema = mongoose.Schema({
    
    city: String
 });

 // Affect model name Schema
 const weather = mongoose.model("weather", weatherSchema);

 // export match
 module.exports = weather;

