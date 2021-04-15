const Categorie = require("../models/categorie");

module.exports = {

    //GET ALL CATEGORIES
    getAll(req, res) {
        Categorie.find().then(categories => {
            res.send(categories);
        });
    },

    //GET ONE CATEGORIE BY ID
    get(req, res) {
        // Récupération de l'id qui a été véhiculé en paramètre de l'url /categories/:id
        const id = req.params.id;
        console.log("Récupération de la catégorie avec l'id", id);

        Categorie.findById(id).then(categorie => {
            res.send(categorie);
        });
    }
};