const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    nombre: { type: String, required: true, max: 60 },
    precio: { type: Number, required: true, max: 40 },
    imgUrl: { type: String, required: true, max: 60 },
    descripcion: { type: String, required: false, max: 80 },
});

module.exports = mongoose.model("producto", ProductoSchema);