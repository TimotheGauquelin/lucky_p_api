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

    //POST ONE GAME
    create(req, res) {

        let objectIdArray = req.body.categories.map(categories => mongoose.Types.ObjectId(categories));

        const game = new Game({
            title: req.body.title,
            preamble: req.body.preamble,
            description: req.body.description,
            nbMinPlayer: req.body.nbMinPlayer,
            nbMaxPlayer: req.body.nbMaxPlayer,
            difficulty: req.body.difficulty,
            gameTimes: req.body.gameTimes,
            quantity: req.body.quantity,
            videoURL: req.body.videoURL,
            minAge: req.body.minAge,
            categories: objectIdArray
        });

        game.save().then(() => {
            res.send({ response: `Création du jeu ${game.title}` });
        });
    },

    // Modifier un film
    modify(req, res) {

        let objectIdArray = req.body.categories.map(categories => mongoose.Types.ObjectId(categories));
        const id = req.params.id;

        // const gameModify {
        //     title: req.body.title,
        //     preamble: req.body.preamble,
        //     description: req.body.description,
        //     nbMinPlayer: req.body.nbMinPlayer,
        //     nbMaxPlayer: req.body.nbMaxPlayer,
        //     difficulty: req.body.difficulty,
        //     gameTimes: req.body.gameTimes,
        //     quantity: req.body.quantity,
        //     videoURL: req.body.videoURL,
        //     minAge: req.body.minAge,
        // });

        Game.findByIdAndUpdate(id, { title: req.body.title, preamble: req.body.preamble, description: req.body.description, nbMinPlayer: req.body.nbMinPlayer, nbMaxPlayer: req.body.nbMaxPlayer, difficulty: req.body.difficulty, gameTimes: req.body.gameTimes, quantity: req.body.quantity, videoURL: req.body.videoURL, minAge: req.body.minAge, categories: objectIdArray }).then(game => {
            res.send({ response: `Modification de ${game.title}` });
        });


    },

    // Supprimer un film
    delete(req, res) {
        const id = req.params.id;
        Game.findByIdAndRemove(id).then(game => {
            res.send({ response: `Suppression du jeu ${game.id}` });
        });
    }
};