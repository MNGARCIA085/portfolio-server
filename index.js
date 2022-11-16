const express = require('express');
const cors = require('cors');
require('dotenv').config(); // vars. de entorno
const { dbConnection } = require('./db/config');

 

// crear el servidor/app de express
const app = express();
 
 
// CORS
app.use(cors());

// para lectura y parseo del body
app.use(express.json());


// rutas
app.use('/api/courses', require('./routes/courses'));


//
dbConnection();


//
app.listen(process.env.PORT, () => {
   console.log(`Escuchando en el puerto ${ process.env.PORT }`)
})




