const express = require("express");
const router = express.Router();
const AddressController = require("../controllers/Address.controllers");

//listar direcciones
router.get("/", AddressController.listAddress);
//registrar direccion
router.post("/registrar", AddressController.createAddress);
//editar direccion
router.put("/editar/:id", AddressController.editAddress);
//buscar Direccion
router.get("/buscar/:id", AddressController.searchAddress);
//eliminar direccion
router.delete("/eliminar/:id", AddressController.deleteAddress);

module.exports = router;