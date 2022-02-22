//datos del servidor
const app = require("./server");
//orm
const sequelize = require("./database/db");
//puerto del servidor
const port = process.env.PORT || 3000;
//inicializando el servidor en le puerto 3000 o en el que le asigne por defecto el servidor
app.listen(port, ()=>{
    console.log("servidor en el puerto: " + port);
    //conexion a la DB 
    
    sequelize.sync({force: false}).then(()=>{
        console.log("conectado a la DB");
    }).catch((err)=>{
        console.log("error en: " + err.message);
    });;
});