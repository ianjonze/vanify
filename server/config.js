const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vanifydb', {useNewUrlParser: true})
	.then (() => console.log('connected to mongodb'))
	.catch(err => console.log('could not connect to MongoDB...', err))