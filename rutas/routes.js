
//creo la rutas para hacer todo mas ordenado y claro
const express = require("express");
const router = express.Router();
const{pedidoMenu} = require ("../controllers/pedidoMenu");
const{confirmacionPedido}= require("../controllers/confirmacionPedido")

router.post("/postmesas",pedidoMenu);

router.post("/postpedido",confirmacionPedido);

module.exports = router