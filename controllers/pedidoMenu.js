//mandar el menu del resto ,guardar la mesa reservada y modificar base de datos mesa
const pedidoMenu=(req,res)=>{
       let mesa = req.body
       console.log(mesa)
       res.send("mesa recibida");
}


module.exports = {pedidoMenu} // para poder exportar el modulo