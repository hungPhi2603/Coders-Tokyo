var Product= require('../models/product.model');

module.exports.index= async function(req, res) {

	// var page= parseInt(req.query.page) || 1;
	// var perPage= 8;
	// var start= (page-1)*perPage;
	// var end= page*perPage;
	// var products= db.get('products').value().slice(start, end);
	
	// res.render('products/index', {
	// 	products: products,
	// 	page: page
	// })

	// var products= await 
	var products= await Product.find();

	res.render('products/index', {
		products: products
	});
	
}