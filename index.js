//Created by Luis David Gallegos Godoy & Jorge Alejandro Dong Llauger
//Date: 07/03/2021

// definimos un puerto por el cual escucharemos peticiones
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || "0.0.0.0"

const cors = require('cors')
const db = require('./config/mongodb.connection');
require('dotenv').config();

const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
    
// configuraciones para nuestro server
const corsOptions = { origin: '*', optionsSuccessStatus: 200 }
app.use(cors(corsOptions))

// Using my ROUTES from routes/routes.js
app.use('/api/order', require('./routes/order.routes'));


//Manda un saludo general en la url origen
app.get('/', function (req, res) {
  	res.send('Saludos desde express');
});

//Metodo get que devuelve el nombre de los autores
app.get('/autores', function (req, res) {
	let autores = {
		"autor1": "Luis David Gallegos Godoy",
		"autor2": "Jorge Alejandro Dong Llauger"
	};

	res.send(autores);
	res.sendStatus(200);
  	
});


app.listen(PORT,HOST, () => { console.log(`Server listening on port ${PORT} and host ${HOST}`); })