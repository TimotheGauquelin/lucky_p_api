const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Création du schema Avis
const ReviewSchema = new Schema({
    userName: String,
    review: String,
    note: Number
});

// Instance du schema Avis
const Review = mongoose.model("review", ReviewSchema);

// Export du module Avis
module.exports = Review;