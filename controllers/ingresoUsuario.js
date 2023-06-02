const jwt=require("jsonwebtoken");

const ingresoUsuario=(req,res)=>{
    const usuarioAutorizado={
        nombre:"Beto",
        contraseña:"martu123"
    };
    const usuarioRegistrado={
        nombre:"Martu",
        contraseña: "beto123"
    }
    const {nombre,contraseña} =req.body;
    //console.log(nombreUsuario[0].nombreUsuario);
    if(nombre === usuarioAutorizado.nombre && contraseña === usuarioAutorizado.contraseña){
            console.log("usuario correcto, se puede generar el token")
          
            //generar el token para devolverlo y que pueda usarlo para cargar una pelicula
            jwt.sign({nombre},"contraseñaSuperSegura",{expiresIn:'30m'},(error,token)=>{
                if(error){
                    res.send(error);
                }else{
                    res.json({token});
                }
            })
       
    }/*if(nombre === usuarioRegistrado.nombre && contraseña === usuarioRegistrado.contraseña ){
        res.send("usuario registrado")
    }*/else{
        res.send("usuario no registrado")
    }
    
}

module.exports = {ingresoUsuario};