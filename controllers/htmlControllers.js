
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
	app.get('/', function (req, res){
		res.render('index');
	});
	
	app.get('/user/:id', function (req, res){
		res.render('user',{ ID: req.params.id, Qstr: req.query.qstrg});	
	});
	app.post('/user', urlencodedParser, function (req, res){
		res.send('Thank you!');
		console.log(req.body.firstname);
		console.log(req.body.lastname);
	});	
}