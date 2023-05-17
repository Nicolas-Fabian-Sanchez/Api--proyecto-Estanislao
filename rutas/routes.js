
//creo la rutas para hacer todo mas ordenado y claro
const express = require("express");
const router = express.Router();
const{pedidoMenu,pedirMenu} = require ("../controllers/pedidoMenu");

const{confirmacionPedido}= require("../controllers/confirmacionPedido")

router.post("/postmenu",pedidoMenu);
router.get("/menuCompleto",pedirMenu);

router.post("/postpedido",confirmacionPedido);

module.exports = router