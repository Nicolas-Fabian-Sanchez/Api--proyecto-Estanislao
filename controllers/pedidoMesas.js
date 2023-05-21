const {traerPedido} = require("../baseDatos/funcionesDB");

const pedirPedido = async(req,res)=>{
    let envioPedido = await traerPedido();
    res.send(envioPedido);
}

module.exports={pedirPedido}