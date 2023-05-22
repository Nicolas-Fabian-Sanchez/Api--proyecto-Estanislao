const jwt=require("jsonwebtoken");

const ingresoUsuario=(req,res)=>{
    const usuarioRegistrado={
        nombre:"Beto",
        contraseña:"martu123"
    };
    const {nombre,contraseña} =req.body;
    //console.log(nombreUsuario[0].nombreUsuario);
    if(nombre === usuarioRegistrado.nombre && contraseña === usuarioRegistrado.contraseña){
            console.log("usuario correcto, se puede generar el token")
          
            //generar el token para devolverlo y que pueda usarlo para cargar una pelicula
            jwt.sign({nombre},"contraseñaSuperSegura",{expiresIn:'30m'},(error,token)=>{
                if(error){
                    res.send(error);
                }else{
                    res.json({token});
                }
            })
        }else{
            res.send("Usuario incorrecto")
    };
    
}

module.exports = {ingresoUsuario};