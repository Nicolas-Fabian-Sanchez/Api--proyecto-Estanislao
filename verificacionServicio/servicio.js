const jwt = require("jsonwebtoken");//recordar instalar libreria

const verificacionServicio = (req,res,next)=>{
    const authToken=req.headers.authorization;
    const token=authToken.split(" ").pop();
    jwt.verify(token,"contraseñaSuperSegura",(error,data)=>{
        if(error){
           if(error.name == "TokenExpiredError"){return res.send("Experito su tiempo , vuelva a logearse")}
           res.send(error)
        }else{
            console.log(data);
            req.auth=data.nombreUsuario;
            next()
        }
    });
};

module.exports={verificacionServicio}