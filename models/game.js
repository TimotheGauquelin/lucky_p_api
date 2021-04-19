const mongoose = require("mongoose");
// Récupération de la classe Schema de mongoose
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

// Création du schema Jeu
const GameSchema = new Schema({
    // _id: ObjectId,
    title: String,
    preamble: String,
    description: String,
    gameTimes: String,
    nbMinPlayer: Number,
    nbMaxPlayer: Number,
    difficulty: Number,
    quantity: Number,
    minAge: Number,
    videoURL: String,
    // content: { type: Array, "default": [] },
    categories: { type: Array, "default": [] }
});

//Instance du schema Jeu
const Game = mongoose.model("game", GameSchema);

// Export du module Jeu
module.exports = Game;