const jwt=require("jsonwebtoken");

const ingresoUsuario=(req,res)=>{
    const usuarioRegistrado={
        nombre:"Beto",
        contraseña:"martu123"
    };
    const nombreUsuario=req.body;
    //console.log(nombreUsuario[0].nombreUsuario);
    if(nombreUsuario[0].nombreUsuario === usuarioRegistrado.nombre && nombreUsuario[0].password === usuarioRegistrado.contraseña){
            console.log("usuario correcto, se puede generar el token")
          
            //generar el token para devolverlo y que pueda usarlo para cargar una pelicula
            jwt.sign({nombreUsuario},"contraseñaSuperSegura",{expiresIn:'30m'},(error,token)=>{
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