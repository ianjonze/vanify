
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/vanify_db', { useNewUrlParser: true })
 	.then(() => console.log("connected to mongodb"))
 	.catch(err => console.error('could not connect to MongoDB...', err));


// VANIFY product model 

const productSchema = new mongoose.Schema({
	sku: String,
	product: String,
	barcode: String,
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

// create a new object from the above Class

async function createProduct() {
	const product = new Product({
		sku: 'VVS15OSF',
		product: 'VT-01',
		barcode: '5060600270055',
		vehicle: {
			id: 1,
			category: '',
			company: 'Vauxhaul',
			model: 'Vivaro SWB 2015+',
			wheelbase: '',
			position: 'OS Front'
		},
		images: {
			thumbnail: '',
			main: ''
		},
		dimensions:{
			w: 1000,
			h: 1200,
			d: 300,
		},
		price: 120
	});

	const result = await product.save(); 
	console.log(result);
}

