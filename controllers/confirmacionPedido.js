//cragar el pedido db mesa ,mandar mensaje ingreso pedido

const confirmacionPedido = (req,res)=>{
    let pedido = req.body
    res.send("su pedido ya ha sido ingresado, en instantes se acercara el mozo")
}

module.exports = {confirmacionPedido}