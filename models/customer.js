const Joi = require('joi');
const mongoose = require("mongoose");

// VANIFY Customer Model December 1, 2018

const Customer = mongoose.model('Customer', new mongoose.Schema({
	name: {
		salutation: {
			type: String,
			required: true,
			minlength: 2,
			maxlength: 5
		},
		firstname:{
			type: String,
			required: true,
			minlength: 5,
			maxlength: 20
		},
		surname: { 
			type: String,
			required: true,
			minlength: 5,
			maxlength: 20
		}
	}.
	contact: {
		email: {
			type: String,
			required: true,
			minlength: 7,
			maxlength: 254
		},
		phone:{
			main: {
			type: Number,
			required: true,
			minlength: 10,
			maxlength: 15
		},
			alt: {
			type: Number,
			required: true,
			minlength: 10,
			maxlength: 15
		}
	}
}));

//CUSTOMER VALIDATION

function validateCustomer(customer) {
	const schema = { 
		name: Joi.string().min(3).required(),
		phone: Joi.string().required(),
	};

	return Joi.validate(customer, schema);
};

exports.Customer = Customer;
exports.validate = validateCustomer;



