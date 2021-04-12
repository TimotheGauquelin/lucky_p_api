const mongoose = require("mongoose");

// Récupération de la classe Schema de mongoose
const Schema = mongoose.Schema;

// Création du schema pour la collection movies
const CategorieSchema = new Schema({
    categorieName: String,
    
});

// Création du modèle qui prend en paramètre le schema que nous venons de créer
const Categorie = mongoose.model("categorie", CategorieSchema);

// Export du module Movie pour pouvoir l'utiliser dans le controller
module.exports = Categorie;