const ReviewController = require("../controllers/review");
const CategorieController = require("../controllers/categorie");
const GameController = require("../controllers/game");
const MenuController = require("../controllers/menu");

module.exports = server => {


    server.get("/", (req, res) => {
        //console.log("Bienvenue sur la page d'accueil de l'API Movies");
        // Le console.log s'affiche bien dans le terminal mais le client (le navigateur) attend toujours une réponse à sa requête --> res.send --> on envoie une réponse
        res.send({
            result: "Bienvenue sur la page d'accueil de Lucky P"
        });
    });


    //REVIEWS ROUTES

    server.get("/reviews", (req, res) => {
        // Faire appel à une action de notre controller en l'occurence getAll
        ReviewController.getAll(req, res);
    });

    server.get("/reviews/:id", (req, res) => {
        ReviewController.get(req, res);
    });


    //CATEGORIES ROUTES

    server.get("/categories", (req, res) => {
        CategorieController.getAll(req, res);
    });

    server.get("/categories/:id", (req, res) => {
        CategorieController.get(req, res);
    });




    //GAMES ROUTES

    server.get("/games", (req, res) => {
        GameController.getAll(req, res);
    });

    server.get("/games/:id", (req, res) => {
        GameController.get(req, res);
    });

    server.post("/games", (req, res) => {
        GameController.create(req, res);
    });

    server.put("/games/:id", (req, res) => {
        GameController.modify(req, res);
    });

    server.delete("/games/:id", (req, res) => {
        GameController.delete(req, res);
    });


    //MENUS ROUTES

    server.get("/menus", (req, res) => {
        MenuController.getAll(req, res);
    });

    server.get("/menus/:id", (req, res) => {
        MenuController.get(req, res);
    });

}