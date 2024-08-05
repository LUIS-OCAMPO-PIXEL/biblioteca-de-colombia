// importar libreria
const express= require("express");

// objetos para llamar los metodos de express
const app = express();

//middleware
app.use(express.static("public"));


// configurar el puerto usando el servidor local
app. listen(3000,function () {
    console.log("El servidor es http://localhost:3000");
})

