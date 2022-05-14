
const express = require('express');
const path = require('path');
require('dotenv').config();
//App de Express
const app = express();

//Node server 
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

//llamar socket.js
require('./sockets/soket');



//Path publico
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath))


//Abrir Servidor 
server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);

    console.log('Servidor corrriendo en puerto', process.env.PORT);
});