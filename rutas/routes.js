
//creo la rutas para hacer todo mas ordenado y claro
const express = require("express");
const router = express.Router();

//------ requiero las funciones para los e,pleados----//
const{ingresoUsuario} = require("../controllers/ingresoUsuario.js");
const{pedirPedido} =require("../controllers/pedidoMesas");          
const{verificacionServicio}=require("../verificacionServicio/servicio");
const{nuevoMenu}=require("../controllers/cargarNuevoMenu");

//------ requiero las funciones para el cliente -----//
const{confirmacionPedido}= require("../controllers/confirmacionPedido")
const{pedidoMenu,pedirMenu} = require ("../controllers/pedidoMenu");

//--------- empleados --------//
router.post("/ingresoApp",ingresoUsuario);
router.get("/traerPedido",pedirPedido); 
router.post("/cargarMenu",verificacionServicio,nuevoMenu);

//--------- cliente-----//
router.post("/postmenu",pedidoMenu);//cliente manda mesa
router.get("/menuCompleto",pedirMenu);//mandamos los menus
router.post("/postpedido",confirmacionPedido);//cliente confirma pedido


module.exports = router