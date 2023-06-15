//aca creamos el molde de como queresmos que ingrese la info a la base de datos

let mongoose = require("mongoose");

let mesasMolde = new mongoose.Schema({
    mesa:{
        type:String,
        require: true
    },
    pedido:{
        type:[],
    },
    totalPagar:{
        type:[]
    }

})

module.exports = mongoose.model("mesasocupadas",mesasMolde,"mesasocupadas");

