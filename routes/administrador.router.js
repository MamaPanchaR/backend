const express = require("express");
const router = express.Router();
const AdministradorController = require("../controllers/administrador.controller");

router.post("/", AdministradorController.create);
router.get("/", AdministradorController.find);
router.get("/:id", AdministradorController.findOne);
router.put("/:id", AdministradorController.update);
router.delete("/:id", AdministradorController.remove);

module.exports = router