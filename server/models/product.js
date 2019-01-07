const mongoose = require("mongoose");
const Joi = require('joi')

// VANIFY product model 

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 255,
		minlength: 5,
	},
	sku: {
		type: String,
		minlength: 5,
		maxlength: 20
	},
	product: String,
	barcode: String,
	description: String,
	vehicle: {
		id: Number,
		category: String,
		manufacturer: String,
		model: String,
		wheelbase: String,
		position: String
	},
	images: {
		thumbnail: String,
		productImage: String
	},
	dimensions:{
		h: Number,
		w: Number,
		d: Number,
	},
	price: Number
});

// create a class from the above Schema using mogoose.model

const Product = mongoose.model('Product', productSchema);

//Product Validation 

function validateProduct(product) {
	const schema = { 
		name: Joi.string().min(5).max(255).required(),
		sku: Joi.string().min(5).max(20).required(),
		product: Joi.string().required(),
		barcode: Joi.string().required().min(3).max(20),
		description: Joi.string().required(),
		vehicle: Joi.object().keys({
				id: Joi.number().max(255),
				category: Joi.string().max(255),
				manufacturer: Joi.string().max(255),
				model: Joi.string().max(255),
				wheelbase: Joi.string().max(10),
				position: Joi.string().max(255)
		}),
		images: Joi.object().keys({
				thumbnail: Joi.string().min(11).max(2083),
				productImage: Joi.string()
		}),
		dimensions: Joi.object().keys({
				h: Joi.number().max(10).required(),
				w: Joi.number().max(10).required(),
				d: Joi.number().max(10).required(),
		}),
		price: Joi.number().required()
	};
	return Joi.validate(customer, schema);
};

// create a new object from the above Class

// async function createProduct() {
// 	const product = new Product({
//		name: '',
// 		sku: 'VVS15OSF',
// 		product: 'VT-01',
// 		barcode: '5060600270055',
//		description: '',
// 		vehicle: {
// 			id: 1,
// 			category: '',
// 			manufacturer: 'Vauxhaul',
// 			model: 'Vivaro SWB 2015+',
// 			wheelbase: '',
// 			position: 'OS Front'
// 		},
// 		images: {
// 			thumbnail: '',
// 			main: ''
// 		},
// 		dimensions:{
// 			h: 1000,
// 			w: 1200,
// 			d: 300,
// 		},
// 		price: 120
// 	});

// 	const result = await product.save(); 
// 	console.log(result);
// }

exports.Product = Product;
exports.validate = validateProduct;

