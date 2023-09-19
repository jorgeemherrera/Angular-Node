// Routes for the products
const express = require('express');
const router = express.Router();
const productController = require('../Controllers/ProductController');

// api/products
router.post('/', productController.CreateProduct);

router.get('/', productController.getProducts);

router.put('/:id', productController.updateProduct);

router.get('/:id', productController.getProductById);

router.delete('/:id', productController.deleteProductById);



module.exports = router;