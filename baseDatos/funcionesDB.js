const moldeMesas = require("./moldeInfo.js");
const moldesEstanislao = require("./moldesEstanislao.js");
const estanislao = require("./moldesEstanislao.js")

const cargaMesa = async (mesa,pedido,totalPagar) => {
    const nuevaMesa = new moldeMesas({
        mesa:mesa,
        pedido:[pedido],
        totalPagar:[totalPagar]
    })
    //console.log(nuevaMesa);
    let resultadoMesa = await moldeMesas.collection.insertOne(nuevaMesa);//no carga las mesas uaaaaa!!!!
    return resultadoMesa
};

const traerMenu =async()=>{
   let resultadoMenu = await estanislao.find();
   return resultadoMenu
};

const cargarPedido = async(mesa,pedido)=>{
    let nuevoPedido=await moldeMesas.updateOne(mesa,{$set:pedido});
    return nuevoPedido
}


//-------- pide pedido para mostrar en el frond del servicio------//
const traerPedido = async()=>{
    let pedidos = await moldeMesas.find()
    return pedidos
}
const eliminarMesa = async(mesa)=>{
    let mesaEliminada = await moldeMesas.deleteOne(mesa);
    return mesaEliminada
}
const cargarMenu =async(tipo,variedad,precio)=>{
    const nuevoMenu= new moldesEstanislao({
        tipo:tipo,
        variedad:variedad,
        precio:precio
    })
    let resultadoMenu = await moldesEstanislao.collection.insertOne(nuevoMenu);
    return resultadoMenu
}

const buscarMenu = async(variedad)=>{
    let menuCambiar = await estanislao.findOne(variedad);
    return menuCambiar
}
const actualizarPrecio= async(filtro,precio)=>{
    let resultado = await moldesEstanislao.updateOne(filtro,{$set:precio});
    return resultado
}
module.exports={cargaMesa,traerMenu,cargarPedido,eliminarMesa,traerPedido,cargarMenu,buscarMenu,actualizarPrecio}
