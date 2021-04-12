const mongoose = require("mongoose");

// Récupération de la classe Schema de mongoose
const Schema = mongoose.Schema;

// Création du schema pour la collection movies
const ReviewSchema = new Schema({
    userName: String,
    review: String,
    note: Number
});

// Création du modèle qui prend en paramètre le schema que nous venons de créer
const Review = mongoose.model("review", ReviewSchema);

// Export du module Movie pour pouvoir l'utiliser dans le controller
module.exports = Review;