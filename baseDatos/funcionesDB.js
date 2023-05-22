const moldeMesas = require("./moldeInfo.js");
const moldesEstanislao = require("./moldesEstanislao.js");
const estanislao = require("./moldesEstanislao.js")

const cargaMesa = async (mesa,pedido,totalPagar) => {
    const nuevaMesa = new moldeMesas({
        mesa:mesa,
        pedido:pedido,
        totalPagar:totalPagar
    })
    console.log(nuevaMesa);
    let resultado = await moldeMesas.collection.insertOne(nuevaMesa);//no carga las mesas uaaaaa!!!!
    return resultado
};

const traerMenu =async()=>{
   let resultadoMenu = await estanislao.find();//error estanislao no esta definido
   return resultadoMenu
};

const cargarPedido = async(mesa,pedido)=>{
    let nuevoPedido=await moldeMesas.updateOne(mesa,{$set:pedido});
    return nuevoPedido
}
const eliminarMesa = async(mesa)=>{
    let mesaEliminada = await moldeMesas.deleteOne(mesa);
    return mesaEliminada
}

//-------- pide pedido para mostrar en el frond del servicio------//
const traerPedido = async()=>{
    let pedidos = await moldeMesas.find()
    return pedidos
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
module.exports={cargaMesa,traerMenu,cargarPedido,eliminarMesa,traerPedido,cargarMenu}
