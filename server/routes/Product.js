// Routes for the products
const express = require('express');
const router = express.Router();

// api/products
router.post('/', () => {
    console.log('creating product')
});

module.exports = router;