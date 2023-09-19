const Product = require("../Models/Product");

exports.CreateProduct = async (req, resp) => {
    try {
        let product;

        product = new Product(req.body);

        await product.save();
        resp.send(product);

    } catch (error) {
        console.log(error);
        resp.status(500).send('Has an error')
    }
}

exports.getProducts = async (req, resp) => {
    try {
        const products = await Product.find();
        resp.json(products)
    } catch (error) {
        console.log(error);
        resp.status(500).send('Has an error')
    }
}

exports.updateProduct = async (req, resp) => {
    try {
        const { product, category, location, price } = req.body;
        let productId = await Product.findById(req.params.id);

        if (!productId) {
            resp.status(404).json({ msg: 'Product does not exist' });
        }

        productId.product = product;
        productId.category = category;
        productId.location = location;
        productId.price = price;

        productId = await Product.findOneAndUpdate({ _id: req.params.id }, productId, { new: true });
        resp.json(productId);

    } catch (error) {
        console.log(error);
        resp.status(500).send('Has an error')
    }
}

exports.getProductById = async (req, resp) => {
    try {
        let productId = await Product.findById(req.params.id);

        if (!productId) {
            resp.status(404).json({ msg: 'Product does not exist' });
        }

        resp.json(productId);

    } catch (error) {
        console.log(error);
        resp.status(500).send('Has an error')
    }
}

exports.deleteProductById = async (req, resp) => {
    try {
        let productId = await Product.findById(req.params.id);

        if (!productId) {
            resp.status(404).json({ msg: 'Product does not exist' });
        }
        await Product.findOneAndRemove({ _id: req.params.id })
        resp.json({ msg: 'Product deleted succesfully' });

    } catch (error) {
        console.log(error);
        resp.status(500).send('Has an error')
    }
}



