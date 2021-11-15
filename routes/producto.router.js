const express = require("express");
const router = express.Router();
const ProductoController = require("../controllers/producto.controller");

router.post("/", ProductoController.create);
router.get("/", ProductoController.find);
router.get("/:id", ProductoController.findOne);
router.put("/:id", ProductoController.update);
router.delete("/:id", ProductoController.remove);

module.exports = router