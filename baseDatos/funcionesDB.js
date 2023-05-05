const moldeMesas = require("./moldeInfo")


const cargaMesa = async (mesa,descripcion,totalPagar) => {
    let nuevaMesa = new moldeMesas({
        mesa:mesa,
        pedido:descripcion,
        totalPagar:totalPagar
    })
    let resultado = await modelMesas.collection.insertOne(nuevaMesa)
    return resultado
};

const traerMenu =async()=>{
   let resultadoMenu = await menu.find();
   return resultadoMenu
};

const cargarPedido = async(mesa,pedido)=>{
    let nuevoPedido=await modelMesas.updateOne(mesa,{$set:pedido});
    return nuevoPedido
}

const eliminarMesa = async(mesa)=>{
    let mesaEliminada = await modelMesas.deleteOne(mesas);
    return mesaEliminada
}

module.exports={cargaMesa,traerMenu,cargarPedido,eliminarMesa}
