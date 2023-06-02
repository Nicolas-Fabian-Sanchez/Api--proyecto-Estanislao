const {cargarMenu,buscarMenu}=require("../baseDatos/funcionesDB");

const nuevoMenu = async(req,res)=>{
       const {tipo,variedad,precio}= req.body;
       console.log(tipo,variedad,precio)
       let ingresoMenuNuevo = await cargarMenu(tipo,variedad,precio);
       console.log(ingresoMenuNuevo)
       res.send("menu cargado con exito")
}
const buscarMenuCambiar= async(req,res)=>{
       const menuBuscado = req.params.variedad;
       let menuCambiar = await buscarMenu({variedad:menuBuscado});
       res.send(menuCambiar)
}

module.exports={nuevoMenu,buscarMenuCambiar};