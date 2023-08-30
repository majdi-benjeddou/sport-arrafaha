// import mongoose module
const mongoose = require("mongoose");
// import mongoose-unique-validator module
const uniqueValidator = require("mongoose-unique-validator");

 // create user Schema avec mongoose
 const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type: String, unique: true},
    pwd: String,
    tel: String,
    role: String,
    avatar: String

 });
 
 // uniqueValidator va t'appliquer à userSchema
 userSchema.plugin(uniqueValidator);

 // Affect model name Schema
 const user = mongoose.model("User", userSchema);

 // export user
 module.exports = user;

