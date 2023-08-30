// import mongoose module
const mongoose = require("mongoose");

// create team Schema avec mongoose
const teamSchema = mongoose.Schema({
    name : String,
    stadium : String,
    owner : String
});

// Affect model name Schema
const team = mongoose.model("Team", teamSchema);

// export team
module.exports = team;