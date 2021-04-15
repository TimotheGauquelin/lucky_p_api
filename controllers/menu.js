const Menu = require("../models/menu");

module.exports = {

    //GET ALL MENUS
    getAll(req, res) {
        Menu.find().then(menus => {
            res.send(menus);
        });
    },

    //GET ONE MENU BY ID
    get(req, res) {
        // Récupération de l'id qui a été véhiculé en paramètre de l'url /menus/:id
        const id = req.params.id;
        console.log("Récupération du menu avec l'id", id);

        Menu.findById(id).then(menu => {
            res.send(menu);
        });
    }
}