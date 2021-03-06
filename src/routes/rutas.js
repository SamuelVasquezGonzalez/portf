const app = require('../config/server');
const https = require('https')
require('colors')
const mysqlConnection = require('../config/db');

app.get('/', (req, res)=>{
    res.render('../views/index.ejs');
});


app.get('/correos', (req, res) =>{
    mysqlConnection.query('SELECT * FROM correos', (err, result) => {
        if(err){
            console.log('ERROR'.bgRed)
        }else{
            res.render('../views/correos.ejs', {
                usuarios: result
            });
        }
    });
});

app.post('/recibircorreos', (req, res)=>{
    const { nombre, correo, mensaje} = req.body;
    mysqlConnection.query('INSERT INTO correos SET?', {
        nombre,
        correo,
        mensaje
    }, (err, result) =>{
        if(err){
            console.log(`${err}`.bgRed);
        }
        res.redirect('/');
        
    });
})

// app.post('/recibircorreos', (req, res))