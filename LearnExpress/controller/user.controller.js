var db= require('../db');
var shortid= require('shortid')

module.exports.index= function(req, res) {
	res.render('users/index', {
		users: db.get('users').value()
	});
}

module.exports.search= function(req, res) {
	var query= req.query.q;
	var matchedUsers= db.get('users').value().filter(function(user) {
		return user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
	});
	res.render('users/index', {
		users: matchedUsers,
		queryVal:  query
	});
	
}

module.exports.create= function(req, res) {
	res.render('users/create');
}

module.exports.getUserById= function(req, res) {
	var Id= req.params.id;
	var user= db.get('users').find({ id: Id}).value();
	res.render('users/view', {
		user: user
	})
}

module.exports.postCreate= function(req, res) {
	req.body.id= shortid.generate();
	req.body.avatar= req.file.path.split('\\').slice(1).join('\\');
	db.get('users').push(req.body).write();
	res.redirect('/users')
}