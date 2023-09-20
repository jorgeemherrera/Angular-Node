const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();
app.use(cors());

app.use(express.json());

app.use('/api/products', require('./routes/Product'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente');
})