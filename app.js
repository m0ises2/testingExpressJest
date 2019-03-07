const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hola Mundo Cruel!');
})

app.get('/return404', (req, res) => {
    res.status(404).send('not found');
})

app.post('/return/object', (req, res) => {
    res.status(200).send({name: 'Moisés', lastname: 'Alvarado'});
})

module.exports = app;