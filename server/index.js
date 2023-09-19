const express = require('express');
const connectDB = require('./config/db');


const app = express();

connectDB();

app.use('/api/products', require('./routes/Product'))

/* app.get('/', (req, resp) => {
    resp.send('Hola Mundo')
}) */

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})