
//creo la rutas para hacer todo mas ordenado y claro
const express = require("express");
const router = express.Router();

//------ requiero las funciones para el servicio----//
const{ingresoUsuario} = require("../controllers/ingresoUsuario.js");
const{pedirPedido,cerrarMesa} =require("../controllers/pedidoMesas");          
const{verificacionServicio}=require("../verificacionServicio/servicio");
const{nuevoMenu,buscarMenuCambiar,cambiarPrecio}=require("../controllers/cargarNuevoMenu");

//------ requiero las funciones para el cliente -----//
const{confirmacionPedido}= require("../controllers/confirmacionPedido")
const{pedidoMenu,pedirMenu} = require ("../controllers/pedidoMenu");

//--------- servicio --------//
router.post("/ingresoApp",ingresoUsuario);
router.get("/traerPedido",pedirPedido); 
router.delete("/eliminarMesa",cerrarMesa);
router.post("/cargarMenu",nuevoMenu);
router.get("/buscarMenu/:variedad",verificacionServicio,buscarMenuCambiar);
router.put("/cambiarPrecio",cambiarPrecio)

//--------- cliente-----//
router.post("/postmenu",pedidoMenu);//cliente manda mesa
router.get("/menuCompleto",pedirMenu);//mandamos los menus
router.post("/postpedido",confirmacionPedido);//cliente confirma pedido


module.exports = router