var mongoose= require('mongoose');

var productSchema= new mongoose.Schema({
	name: String,
	image: String,
	price: Number
});

var Product= mongoose.model('Product', productSchema, 'products');

module.exports= Product;