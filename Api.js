const express = require('express');// requiero la funcion expres

const cors = require('cors');
const api = express();//la llamo y asigno una constante
const port =  4001;
require("./baseDatos/dataBase.js")
api.use(express.json());// el use nos permite trabajar con informacion json 
api.use(cors());
api.use(express.urlencoded({extended:true}));//para poder recibir objetos como datos



api.use("",require("./rutas/routes"))


api.listen(port,()=>
     console.log (`Escuchamdo por el puerto ${port}`)
);
