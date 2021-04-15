const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

// Création du schema pour la collection Menu
const MenuSchema = new Schema({
    _id: ObjectId,
    name: String,
    description: String,
    price: Number,
    priceBottle: Number,
    type: String,
});

// Instance du schema Menu
const Menu = mongoose.model("menu", MenuSchema);

// Export du module Menu
module.exports = Menu;