const mysql = require('mysql');
require("colors")

const mysqlConnection = {
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'be22882af9fc37',
    password: 'bf89960b',
    database: 'heroku_63bc1e280ec7367'
}

const conex = mysql.createPool(mysqlConnection);

conex.getConnection((err, connection) =>{

  if(err){
    if(err.code === 'PROTOCOL_CONNECTION_LOST'){
      console.log("LA CONEXION CON LA BASE DE DATOS DE HA CERRAD".bgRed)
    }
    if(err.code === 'ER_CON_COUNT_ERROR'){
      console.log("LA BASE DE DATOS TIENE DEMASIADAS CONEXIONES".bgRed)
    }
    if(err.code === 'ECONNREFUSED'){
      console.log("REVISA LOS DATOS DE CONEXION DE LA BASE DE DATOS".bgRed)
    }
  }
  if(connection) connection.release();
  console.log("Se ha conectado la base de datos".bgGreen)
  return;
});

module.exports = conex;