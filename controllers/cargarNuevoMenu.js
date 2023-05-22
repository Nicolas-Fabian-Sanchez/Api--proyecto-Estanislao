const {cargarMenu}=require("../baseDatos/funcionesDB");

const nuevoMenu = async(req,res)=>{
       const {tipo,variedad,precio}= req.body;
       console.log(tipo,variedad,precio)
       let ingresoMenuNuevo = await cargarMenu(tipo,variedad,precio);
       console.log(ingresoMenuNuevo)
       res.send("menu cargado con exito")
}

module.exports={nuevoMenu};