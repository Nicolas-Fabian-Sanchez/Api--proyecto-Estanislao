const {cargarMenu}=require("../baseDatos/funcionesDB");

const nuevoMenu = async(req,res)=>{
       const {tipo,variedad,precio}= req.body;
       let ingresoMenuNuevo = await cargarMenu(tipo,variedad,precio);
       res.send("menu cargado con exito")
}

module.exports={nuevoMenu};