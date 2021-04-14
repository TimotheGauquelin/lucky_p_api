
const mongoose = require("mongoose");

// Récupération de la classe Schema de mongoose
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId
// Création du schema pour la collection movies
const GameSchema = new Schema({
    _id: ObjectId,
    lolo: ObjectId,
    title: String,
    preamble: String,
    description: String,
    gameTimes: String,
    nbMinPlayer: Number,
    nbMaxPlayer: Number,
    difficulty: Number,
    quantity: Number,
    minAge: Number,
    categories: { type: Array, "default": [] }
});


const Game = mongoose.model("game", GameSchema);


// Export du module Movie pour pouvoir l'utiliser dans le controller
module.exports = Game;