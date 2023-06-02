// coneccion a la base de datos Mongo db
require("dotenv").config(); // de esta manera le damos mas seguridad a la contraseña
let mongoose = require("mongoose");
//esto si uso un servidor local:
//const servidor= "127.0.0.1:27017";//esta es la ruta del servidor local,si tengo una ruta de un 
//servidor externo cambio la ruta y listo 
//const dataBase = "estanislao";

// usando servidor externo mongodb atlas :

let usuario = process.env.usser_db
let contraseña =process.env.pass_db

async function conexionMongo(){
    await mongoose.connect(`mongodb+srv://${usuario}:${contraseña}@cluster0.g2hwwn1.mongodb.net/?retryWrites=true&w=majority`)
}

conexionMongo()//como es una promesa uso el then y el catch como en la funcion fecht
.then((respuestaOk)=>{console.log("conexion exitosa a MongoDB papurri ;) !!!")})
.catch((error)=>{console.log("error en la conexion"+ error)})
