const express = require('express');
const app = express();


const axios = require('axios');
const DataJson = require('./models/dataJson');

const port = 3000;

const datos = new DataJson();

const home = [
                { url: '/docentes' },
                { url: '/estudiantes' }
            ]

app.get('/', (req, res) => {
  res.send(home);
});

app.get('/docentes', async (req, res) => {
    const json = await datos.docentes();
    res.send( json );
});

app.get('/estudiantes', async (req, res) => {
    const json = await datos.estudiantes();
    res.send( json );
});

app.get('*', (req, res) => {
    res.send('404 | recurso no existe')
});

app.listen(port, () => {
    console.log(`App escuchanco en http://localhost:${port}`);
});


// const { leerInput } = require('./helpers/inquirer');

// const main = async() => {

//     let opt
//     const texto = await leerInput('hola: ');
//     console.log( texto );
// }

// main(); ******