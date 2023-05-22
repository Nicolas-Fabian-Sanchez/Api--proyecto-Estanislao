const {cargaMesa,traerMenu}= require("../baseDatos/funcionesDB")



const menu = [{ platoCaliente:["milanesa con papas","pizanezas","ravioles","bife a la criolla"]},
              {picadas:["fiambre 1","fiambre2","fiambre3","fiambre4"]},
              {bebidasAlcolicas:["opcion1","opcion2","opcion3","opcion4",]},
              {bebidasSinAlcohol:["opcion1","opcion2","opcion3","opcion4",]}
]



//mandar el menu del resto ,guardar la mesa reservada y modificar base de datos mesa

const pedidoMenu=async(req,res)=>{ // mando los datos de la mesa y envio el menu (para esto transformo los el array en dato json)
       const {mesa,pedido,totalPagar} = req.body;
       let ingresarMesa = await cargaMesa({mesa,pedido,totalPagar});
       console.log(ingresarMesa)//para ver la mesa recivida en consola ,no tiene funcion
       //let envioMenu = JSON.stringify(menu)//asi modifico el array en json para enviarlo
       res.redirect("/menuCompleto");// esto lo hago para nose preguntar jajaja?
}

const pedirMenu =async(req,res)=>{
       let envioMenu = await traerMenu();
       res.send(envioMenu)
}
module.exports = {pedidoMenu,pedirMenu} // para poder exportar el modulo