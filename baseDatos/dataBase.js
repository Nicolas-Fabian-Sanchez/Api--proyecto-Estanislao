// coneccion a la base de datos Mongo db

let mongoose = require("mongoose");

const servidor= "127.0.0.1:27017";/*esta es la ruta del servidor local,si tengo una ruta de un 
servidor externo cambio la ruta y listo */
const dataBase = "estanislaoDB";

async function conexionMongo(){
    await mongoose.connect(`mongodb://${servidor}/${dataBase}`)
}

conexionMongo()//como es una promesa uso el then y el catch como en la funcion fecht
.then((respuestaOk)=>{console.log("conexion exitosa a MongoDB papurri ;) !!!")})
.catch((error)=>{console.log("error en la conexion"+ error)})
