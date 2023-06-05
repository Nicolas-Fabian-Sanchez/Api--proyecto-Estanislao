const jwt=require("jsonwebtoken");

const ingresoUsuario=(req,res)=>{
    const usuarioAutorizado={
        nombre:"Beto",
        contrasenia:"martu123"
    };
    const usuarioRegistrado={
        nombre:"Martu",
        contrasenia: "beto123"
    }
    const {nombre,contrasenia} =req.body;
    //console.log(nombreUsuario[0].nombreUsuario);
    if(nombre === usuarioAutorizado.nombre && contrasenia === usuarioAutorizado.contrasenia){
            console.log("usuario correcto, se puede generar el token")
          
            //generar el token para devolverlo y que pueda usarlo para cargar una pelicula
            jwt.sign({nombre},"contraseñaSuperSegura",{expiresIn:'30m'},(error,token)=>{
                if(error){
                    res.send(error);
                }else{
                    res.json({token});
                }
            })
       
    }else if(nombre === usuarioRegistrado.nombre && contrasenia === usuarioRegistrado.contrasenia ){
        res.send("usuario registrado")
    }else{
        res.send("usuario no registrado")
    }
    
}

module.exports = {ingresoUsuario};