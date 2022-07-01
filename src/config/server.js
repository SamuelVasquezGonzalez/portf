const express = require('express');
const path = require('path');
const colors = require('colors');
const bodyParser = require('body-parser');

const app = express();


// Ajustes
app.set('Puerto', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Middlewares
app.use(express.static(path.join(__dirname, "../static")));
app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app;