const mongoose = require("mongoose");
const Joi = require('joi')

// VANIFY product model 

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 255,
		minlength: 5,
		maxlength: 20
	}
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
		company: String,
		model: String,
		wheelbase: String,
		position: String
	},
	images: {
		thumbnail: String,
		main: String
	},
	dimensions:{
		w: Number,
		h: Number,
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
		vehicle: Joi.object().max(255)
			.keys({
				id: Joi.number().max(255),
				category: Joi.string().max(255),
				company: Joi.string().max(255),
				model: Joi.string().max(255),
				wheelbase: Joi.string().max(10),
				position: Joi.string().max(255)
		}),
		images: Joi.object()
			.keys({
				thumbnail: Joi.string(),
				main: Joi.string()
		}),
		dimensions: Joi.object().
			.keys({
				w: Joi.number().max(10).required(),
				h: Joi.number().max(10).required(),
				d: Joi.number().max(10).required(),
		}),
		price: Joi.number().required()
	};
	return Joi.validate(customer, schema);
};


// create a new object from the above Class

// async function createProduct() {
// 	const product = new Product({
// 		sku: 'VVS15OSF',
// 		product: 'VT-01',
// 		barcode: '5060600270055',
// 		vehicle: {
// 			id: 1,
// 			category: '',
// 			company: 'Vauxhaul',
// 			model: 'Vivaro SWB 2015+',
// 			wheelbase: '',
// 			position: 'OS Front'
// 		},
// 		images: {
// 			thumbnail: '',
// 			main: ''
// 		},
// 		dimensions:{
// 			w: 1000,
// 			h: 1200,
// 			d: 300,
// 		},
// 		price: 120
// 	});

// 	const result = await product.save(); 
// 	console.log(result);
// }

exports.Product = Product;
exports.validate = validateProduct;

