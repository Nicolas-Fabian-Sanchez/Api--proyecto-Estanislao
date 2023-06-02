let mongoose = require("mongoose");

let estanislao = new mongoose.Schema({
    tipo:{
      type:String,
    },
    variedad:{
      type:String,
    },
    precio:{
      type:Number,
    }

})
module.exports = mongoose.model("estanislao",estanislao,"estanislao");