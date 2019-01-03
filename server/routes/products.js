const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const {Product, validate} = require('../models/product');

// RETURN LIST OF ALL PRODUCTS

router.get('/', async (req, res) => {
		 const products = await Product.find();
		 res.send(products);
});

// POST A NEW PRODUCT

router.post('/', async (req, res) => {
	console.log (req.body);

	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		sku: req.body.sku,
		product: req.body.product,
		barcode: req.body.barcode,
		description: req.body.description,
		vehicle: {
			id: req.body.vehicle.id,
			category: req.body.vehicle.category,
			manufacturer: req.body.vehicle.manufacturer,
			model: req.body.vehicle.model,
			wheelbase: req.body.vehicle.wheelbase,
			position: req.body.vehicle.position
		},
		images: {
			thumbnail: req.body.images.thumbnail,
			main: req.body.images.main
		},
		dimensions:{
			h: req.body.dimensions.h,
			w: req.body.dimensions.w,
			d: req.body.dimensions.d,
		},
		price: req.body.price
	});
	product
		.save()
		.then(result => {
			console.log(result);
			res.status(201).json({
				message: "Product Created Successfully"
				// To-Do: Return the newly created Product to the client.
			})
		})
	})
module.exports = router;