const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AdministradorSchema = new Schema({
    nombre: { type: String, required: true, max: 60 },
    apellido: { type: String, required: true, max: 40 },
    cedula: { type: String, required: true, max: 60 },
    email: { type: String, required: false, max: 80 },
});

module.exports = mongoose.model("administrador", AdministradorSchema);