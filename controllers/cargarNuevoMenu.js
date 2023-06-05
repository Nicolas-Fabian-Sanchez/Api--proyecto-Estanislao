const {cargarMenu,buscarMenu, actualizarPrecio}=require("../baseDatos/funcionesDB");

const nuevoMenu = async(req,res)=>{
       const {tipo,variedad,precio}= req.body;
       console.log(tipo,variedad,precio)
       let ingresoMenuNuevo = await cargarMenu(tipo,variedad,precio);
       console.log(ingresoMenuNuevo)
       res.send("menu cargado con exito")
}
const buscarMenuCambiar= async(req,res)=>{
       let menuBuscado = req.params.variedad;
       let menuCambiar = await buscarMenu({variedad:menuBuscado});
       res.send(menuCambiar)
}
const cambiarPrecio=async(req,res)=>{
       const{filtro,precioActualizado}=req.doby;
       let respuestaDB = await actualizarPrecio(filtro,precioActualizado);
       console.log(respuestaDB)
       res.send("precio actualizado con exito")
}

module.exports={nuevoMenu,buscarMenuCambiar,cambiarPrecio};