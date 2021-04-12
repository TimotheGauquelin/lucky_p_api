// Import du modèle Movie
const Review = require("../models/review");

module.exports = {
    // Récupérer tous les films
    getAll(req, res) {
        // On interroge la méthode find pour récupérer tous les films
        Review.find().then(reviews => {
            // Renvoyer au client le résultat qui est le tableau de films
            res.send(reviews);
        });
    },

    // // Récupérer un film
    // get(req, res) {
    //     // Récupération de l'id qui a été véhiculé en paramètre de l'url /movies/:id
    //     const id = req.params.id;
    //     console.log("Récupération du film avec l'id", id);

    //     Movie.findById(id).then(movie => {
    //         res.send(movie);
    //     });
    // },

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