let mysql= require("mysql");
let conexion=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dbbiblioteca",
    port:3307
});
conexion.connect(function(err){
    if (err) {
        throw err
    }else{
        console.log("conexion exitosa");
    }
});
const consulta=`SELECT * FROM prestamo`;
const nuevoRegistro=`INSERT INTO categoria (idCategoria, Nombre) VALUES (NULL, 'Religion');`
const modificar=`UPDATE categoria SET Nombre = 'dark Near' WHERE categoria.idCategoria = 1;`
const borrar=`DELETE FROM categoria WHERE categoria.idCategoria= 2`
// conexion.query(nuevoRegistro,function (err,rows) {
//     if (err) {
//         throw err;
//     }else{
//         console.log(rows);
//     }
// })
conexion.query(consulta,function (err,lista) {
    if (err) {
        throw err;
        } else {
            console.log(lista);
            }
        })
//  conexion.query(modificar,function (err,rows) {
//             if (err) {
//                 throw err;
//             }else{
//                 console.log(`modificado exitosamente`);
//             }
//         })
        conexion.end()