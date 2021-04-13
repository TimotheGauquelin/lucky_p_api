const Game = require("../models/game");

module.exports = {
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

    get(req, res) {
        // Récupération de l'id qui a été véhiculé en paramètre de l'url /games/:id
        const id = req.params.id;
        console.log("Récupération du jeu avec l'id", id);

        Game.findById(id).then(game => {
            res.send(game);
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