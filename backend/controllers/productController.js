// // backend/controllers/productController.js
// const Product = require('../models/Product');

// exports.getAllProducts = async (req, res, next) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (error) {
//     next(error);
//   }
// };

// exports.getProductById = async (req, res, next) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (product) res.json(product);
//     else res.status(404).json({ message: 'Product not found' });
//   } catch (error) {
//     next(error);
//   }
// };
// backend/controllers/productController.js

// Sample in-memory product data array
const products = [
    {
      _id: "1",
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation.",
      price: 99.99,
      image: "https://via.placeholder.com/300x200.png?text=Headphones"
    },
    {
      _id: "2",
      name: "Smartwatch",
      description: "Water-resistant smartwatch with multiple fitness tracking features.",
      price: 149.99,
      image: "https://via.placeholder.com/300x200.png?text=Smartwatch"
    },
    {
      _id: "3",
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with excellent sound quality.",
      price: 39.99,
      image: "https://via.placeholder.com/300x200.png?text=Speaker"
    }
  ];
  
  exports.getAllProducts = (req, res, next) => {
    res.json(products);
  };
  
  exports.getProductById = (req, res, next) => {
    const product = products.find(p => p._id === req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  };
  