// Import du modèle Movie
const Review = require("../models/review");

module.exports = {
    
    //GET ALL REVIEWS
    getAll(req, res) {
        // On interroge la méthode find pour récupérer tous les films
        Review.find().then(reviews => {
            // Renvoyer au client le résultat qui est le tableau de films
            res.send(reviews);
        });
    },

    //GET ONE REVIEW BY ID
    get(req, res) {
        // Récupération de l'id qui a été véhiculé en paramètre de l'url /movies/:id
        const id = req.params.id;
        console.log("Récupération du commentaire avec l'id", id);

        Review.findById(id).then(review => {
            res.send(review);
        });
    }
};