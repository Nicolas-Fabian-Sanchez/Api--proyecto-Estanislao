const {traerPedido,eliminarMesa} = require("../baseDatos/funcionesDB");

const pedirPedido = async(req,res)=>{
    let envioPedido = await traerPedido();
    res.send(envioPedido);
}
const cerrarMesa = async(req,res)=>{
    let mesa = req.body
    let mesaEliminada= await eliminarMesa(mesa);
    res.send(`la mesa ${mesa}  fue eliminada con exito`)
}

module.exports={pedirPedido,cerrarMesa}