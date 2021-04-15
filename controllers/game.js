const Game = require("../models/game");
var mongoose = require('mongoose');


module.exports = {

    //GET ALL GAMES
    getAll(req, res) {

        Game.aggregate([
            {
                '$lookup': {
                    'from': 'categories',
                    'localField': 'categories',
                    'foreignField': '_id',
                    'as': 'categories'
                }
            }
        ]).exec((err, games) => {
            if (err) throw err;
            res.send(games)
        });

    },

    //GET ONE GAME BY ID
    get(req, res) {
        const id = req.params.id;
        const objId = mongoose.Types.ObjectId(id);

        Game.aggregate([
            {
                $match: { _id: objId }
            },
            {
                '$lookup': {
                    'from': 'categories',
                    'localField': 'categories',
                    'foreignField': '_id',
                    'as': 'categories'
                }
            }
        ]).exec((err, games) => {
            if (err) throw err;
            res.send(games)
        });
    },

    // // Créer un nouveau film
    // create(req, res) {
    //     const movie = new Movie({
    //         title: req.body.title,
    //         duration: req.body.duration,
    //         releaseDate: req.body.releaseDate
    //     });

    //     movie.save().then(() => {
    //         res.send({ response: `Création du film ${movie.title}` });
    //     });
    // },

    // // Supprimer un film
    // delete(req, res) {
    //     const id = req.body.id;
    //     Movie.findByIdAndRemove(id).then(movie => {
    //         res.send({ response: `Suppression du film ${movie.title}` });
    //     });
    // }
};