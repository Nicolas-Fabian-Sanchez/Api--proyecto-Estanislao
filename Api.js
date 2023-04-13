const express = require('express');// requiero la funcion expres
const { pedidoMenu } = require('./controllers/pedidoMenu'); //importo el modulo pedidoMneu
const { confirmacionPedido } = require('./controllers/confirmacionPedido');
const api = express();//la llamo y asigno una constante
//const cors = require('cors');
const port =  4001;

api.use(express.json());// el use nos permite trabajar con informacion json 
//api.use(cors());
api.use(express.urlencoded({extended:true}));//para poder recibir objetos como datos



api.post("/postmesas",pedidoMenu);

api.post("/postpedido",confirmacionPedido);


api.listen(port,()=>
     console.log (`Escuchamdo por el puerto ${port}`)
);
