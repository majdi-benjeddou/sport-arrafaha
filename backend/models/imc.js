// import mongoose module
const mongoose = require("mongoose");

 // create imc Schema avec mongoose
 const imcSchema = mongoose.Schema({
    name: String,
    taille: Number,
    poids: Number,
    imcValue: Number
 });

 // Affect model name Schema
 const imc = mongoose.model("Imc", imcSchema);

 // export imc
 module.exports = imc;

