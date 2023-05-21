
//creo la rutas para hacer todo mas ordenado y claro
const express = require("express");
const router = express.Router();
const{pedidoMenu,pedirMenu} = require ("../controllers/pedidoMenu");
const{ingresoUsuario} = require("../controllers/ingresoUsuario.js");//estos son los del servicios
const{pedirPedido} =require("../controllers/pedidoMesas")           //estos son lo del servicio o app de empleados
const{confirmacionPedido}= require("../controllers/confirmacionPedido")

router.post("/ingresoApp",ingresoUsuario);//para dueño o empleados
router.get("/traerPedido",pedirPedido); //para dueño o empleados

router.post("/postmenu",pedidoMenu);
router.get("/menuCompleto",pedirMenu);
router.post("/postpedido",confirmacionPedido);


module.exports = router