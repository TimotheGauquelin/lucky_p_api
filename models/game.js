const mongoose = require("mongoose");

// Récupération de la classe Schema de mongoose
const Schema = mongoose.Schema;

// Création du schema pour la collection movies
const GameSchema = new Schema({
    title: String,
    preamble: String,
    description: String,
    gameTimes: String,
    nbMinPlayer: Number,
    nbMaxPlayer: Number,
    difficulty: Number,
    quantity: Number,
    minAge: Number
    
});

// Création du modèle qui prend en paramètre le schema que nous venons de créer
const Game = mongoose.model("game", GameSchema);

// Export du module Movie pour pouvoir l'utiliser dans le controller
module.exports = Game;