const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Création du schema Catégorie
const CategorieSchema = new Schema({
    categorieName: String,
});

// Instance du schema Catégorie
const Categorie = mongoose.model("categorie", CategorieSchema);

// Export du module Catégorie pour pouvoir l'utiliser dans le controller
module.exports = Categorie;