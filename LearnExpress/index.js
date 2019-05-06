require('dotenv').config()


const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var userRoute = require('./route/user.route')
var authRoute = require('./route/auth.route')
var productRoute = require('./route/product.route')
var cartRoute = require('./route/cart.route')

var authMiddleware= require('./middlewares/auth.middleware');
var sessionMidlleware= require('./middlewares/session.middleware')


app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(sessionMidlleware);

app.get('/', function(req, res) {
	res.render('index', {
		name: "01"
	});
})

app.use(express.static('public'))
app.use('/users', authMiddleware.authRequire, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))