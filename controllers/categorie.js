const Categorie = require("../models/categorie");

module.exports = {
    getAll(req, res) {
        Categorie.find().then(categories => {
            res.send(categories);
        });
    },

    get(req, res) {
        // Récupération de l'id qui a été véhiculé en paramètre de l'url /games/:id
        const id = req.params.id;
        console.log("Récupération de la catégorie avec l'id", id);

        Categorie.findById(id).then(categorie => {
            res.send(categorie);
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