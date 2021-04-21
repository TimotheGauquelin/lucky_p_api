// Chargement du module express
const express = require("express");
// Création du serveur via express
const server = express();

// // Chargement du module mongoose
const mongoose = require("mongoose");

const cors = require('cors')
// // Chargement des routes
const routes = require("./routes");

// // Indispensable pour recevoir des données (dans le body de la requête) d'une requête autre que GET
server.use(express.json());

server.use(cors());

server.listen(5500, () => {
    console.log("Serveur lancé et écoute sur le port 5500");

    // Connexion à la base hello-mongo de notre serveur MongoDB
    // Les options ajoutées permettent de palier à des messages de warning mais aussi à utiliser les dernières améliorations de mongoose
    mongoose.connect("mongodb+srv://admin:password59@cluster0.lozix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;
    //     // once --> une fois que
    db.once("open", () => console.log("Connexion au serveur MongoDB et à la base Lucky P"))
    // .on("error", error => console.error("Problème durant la connexion", error));
});

// // Création d'une route vers / 
server.get("/bonjour", (req, res) => {
    // //     // Le console.log s'affiche bien dans le terminal mais le client (le navigateur) attend toujours une réponse à sa requête --> res.send --> on envoie une réponse
    res.send({
        result: "Bienvenue sur la page d'accueil de la BDD Lucky P"
    });
});

// // Utilisation des routes précédemment chargées
routes(server);

