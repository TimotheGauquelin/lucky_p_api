const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

// Création du schema Catégorie
const CategorieSchema = new Schema({
    _id: String,
    categorieName: String,
});

// Instance du schema Catégorie
const Categorie = mongoose.model("categorie", CategorieSchema);

// Export du module Catégorie pour pouvoir l'utiliser dans le controller
module.exports = Categorie;