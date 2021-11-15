const Administrador = require('../models/administrador.model');

let response = {
    msg: "",
    exito:false
}
exports.create = function(req, res) {
    let administrador = new Administrador({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        email: req.body.email,

    });
    administrador.save(function(err) {
        if(err) {
            console.log = false;
            response.exito = false,
            response.msg = "Error al guardar el administrador",
            res.json(response)
            return;
        } 
        response.exito = true,
        response.msg = "El administrador se guardó correctamente",
        res.json(response)
    });
}

exports.find = function(req, res) {
    Administrador.find(function(err, administradores) {
        res.json(administradores)
    });
}

exports.findOne = function(req, res) {
    Administrador.findOne({_id: req.params.id}, function(err, administrador) {
        res.json(administrador)
    }); 
}

exports.update = function(req, res) {
    let administrador = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        email: req.body.email,
    }

    Administrador.findByIdAndUpdate(req.params.id, { $set:administrador }, function(err) {
        if(err) {
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el administrador",
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El administrador se modificó correctamente",
        res.json(response)
    })
}

exports.remove = function(req, res) {
    Administrador.findByIdAndRemove({ _id: req.params.id }, function(err) {
        if(err) {
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el administrador",
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El administrador se eliminó correctamente",
        res.json(response)
    })
}