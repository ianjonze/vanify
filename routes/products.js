const express = require('express');
const router = express.Router();
const {Product, validate} = require('../models/product');

// RETURN LIST OF ALL PRODUCTS

router.get('/', async (req, res) => {
		 const products = await Product.find();
		 res.send(products);
});