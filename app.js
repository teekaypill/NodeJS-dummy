// var greet = require('./greet');

// greet.english();
// greet.spanish();

// var greet1 = require('./greet1');

// greet1();

// var greet2 = require('./greet2').greet();


// var greet3 = require('./greet3')
// greet3.greeting = 'Hello world 3b';

// var greet3b = require('./greet3').greet();

// var Greet4 = require('./greet4').greetr;
// var greetr = new Greet4();
// greetr.greet();

// var greet5 = require('./greet5');
// greet5.greetr();

// var greet6 = require('./greet6');
// var greet7 = require('./greet7');
// greet7.greet();

// var obj = {
// 	greet: 'How are you?'
// };

// console.log(obj.greet);
// console.log(obj['greet']);
// var dummy = 'greet';
// console.log(obj[dummy]);

// var arr = [];

// arr.push(function(){
// 	console.log('how are you X?')
// });

// arr.push(function(){
// 	console.log('how are you Y?')
// });

// arr.push(function(){
// 	console.log('how are you Z?')
// });

// arr.forEach(function(item){
// 	item();
// });

//Emitter

// var Emitter = require('events');
// var eventConfig = require('./config').events;

// var emtr = new Emitter();

// emtr.on(eventConfig.GREET, function(){
// 	console.log('An event occured');
// });

// emtr.on(eventConfig.GREET, function(){
// 	console.log('Some said hello');
// });

// emtr.on(eventConfig.BYE, function(){
// 	console.log('Nice talking to you');
// });

// emtr.on(eventConfig.BYE, function(){
// 	console.log('Adios');
// });


// emtr.emit('greet');
// console.log('hello');
// emtr.emit('bye');

// inheritance via object.create 
// var person = {
// 	firstname: '',
// 	lastname: '',
// 	greet: function(){
// 		return this.firstname+' '+this.lastname;
// 	}
// };

// var john = Object.create(person);
// john.firstname = 'John';
// john.lastname = 'Doe';
// john.age = {
// 	old: ''
// 	};

// var jane = Object.create(john);
// jane.firstname = 'Jane';
// jane.lastname = 'Fischer';
// jane.age.old = 30;

// console.log(john.greet());
// console.log(jane.greet());	
// console.log(john.age.old);
// console.log(jane.age.old);

//Use Event emitter prototyping 

// var EventEmitter = require('events');
// var util = require('util');
// function Greetr(){
// 	EventEmitter.call(this);
// 	this.greeting = 'Hi';
// }
// util.inherits(Greetr, EventEmitter);

// Greetr.prototype.greet = function(data){
// 		this.emit('greet');
// 		console.log(this.greeting+': '+data);
// }
// var greetr = new Greetr();

// greetr.on('greet', function(){
// 	console.log('Greeting event occurred');	
// });

// greetr.greet('Frank');

//Template literal feature in ES6

// var name = 'Tony';

// var greet = 'Hello ' + name;
//var greet2 = `Hello ${ name }`;

// console.log(greet);
// console.log(greet2);

//call and apply in Javascript
//  var obj = {
// 	name: 'John Doe',
// 	greet: function(data1, data2){
// 		console.log(`Hello ${ this.name }`);
// 		console.log(`Data received are ${ data1 } and ${ data2 }`);
// 	}
// }

// obj.greet('dummy1', 'dummy2');
// obj.greet.call({name: 'Jane Doe'}, 'dummy3', 'dummy4');
// obj.greet.apply({name: 'Sam Doe'}, ['dummy5', 'dummy6']);

//use .call() as super constructor

// var util = require('util');

// function Person () {
// 	this.firstname = 'John';
// 	this.lastname = 'Doe';	
// }

// function Policeman () {
// 	Person.call(this);
// 	this.badgeID = 1234;
// }

// util.inherits(Policeman, Person);

// Person.prototype.greet = function(){
// 	console.log(`Name: ${ officer.firstname } ${ officer.lastname } and Badge ID: ${officer.badgeID}`);
// }


// var officer = new Policeman();
// officer.greet();
'use strict'
// Buffer

// var buffer = new Buffer('Hello','utf8');
// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.toJSON());
// console.log(buffer[1]);

// buffer.write('wor');
// console.log(buffer.toString());

// ES6 ArrayBuffer

// var buffer = new ArrayBuffer(8);
// var view = new Int16Array(buffer);
// view[0] = 5;
// view[1] = 15;
// view[2] = 9;
// console.log(view);

// callbacks

// function greet(callback){
// 	console.log('Inside Greet');
// 	callback(10);
// }

// greet(function(data){
// 	console.log('Inside the callback function');
// 	console.log('The data passed is '+data);
	
// });

// var fs = require('fs');

// var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16*2014});

// var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// readable.on('data', function(chunk){
// 	console.log(chunk);
// 	writable.write(chunk);
// });

// HTTP web server

// var http = require('http');

// http.createServer(function(req, res){
// 	res.writeHead(200, {'content-type': 'text/plain'});
// 	res.end('Hello World');
// }).listen(1337, '127.0.0.1');

//http server reads HTML, templates

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){
// 	var html = fs.readFileSync(__dirname+'/index.htm', 'utf8');
// 	var message = 'Hello World!!!!'
// 	html = html.replace('{Message}', message)
// 	res.writeHead(200, { 'content-type': 'text/html'});
// 	res.end(html);
// }).listen(1337);

//http server read streams piping for performance

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){
// 	res.writeHead(200, { 'content-type': 'text/html'});
// 	fs.createReadStream(__dirname+'/index.htm').pipe(res);
// }).listen(1337);

// http server JSON outputting and API and URL routing 


// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){
	
// 	if(req.url === '/'){
// 	res.writeHead(200, { 'content-type': 'application/JSON'});
// 	var obj = {
// 		firstname: 'John',
// 		lastname: 'Doe'
// 	};
// 	res.end(JSON.stringify(obj));
// 	}	
// 	else if(req.url === '/doit'){
// 	res.writeHead(200, { 'content-type': 'text/html'});
// 	fs.createReadStream(__dirname+'/index.htm').pipe(res);
// 	}
// 	else{
// 	res.writeHead(404);
// 	res.end('Bad URL');		
// 	}
// }).listen(1337);

//moment package

// var moment = require('moment');
// console.log('The time time now is '+moment().format('ddd, hA')); 


// express package - basic get() use() methods

// var express = require('express');
// var cookieParser = require('cookie-parser');

// var app = express();
// app.use(cookieParser());

// var port = process.env.PORT || 3000;




// app.get('/', function (req, res){
// 	res.send('<html><head><link href=styles/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>');
// });

// app.get('/user/:id', function (req, res, next){
// 	res.end(`<html><head></head><body><h1>Person ${ req.params.id } </h1></body></html>`);
//   next();
// });

// app.get('/api', function(req, res){
// 	res.json({ firstname: 'John', lastname: 'Doe'});
// });
// app.use('/user/:id', function (req, res, next) {
//   console.log('ID:', req.params.id);
//   next();
// }, function (req, res, next) {
// res.end('User Info'); 
// console.log('Second MW function arg');
// next();
// });

// // handler for the /user/:id path, which prints the user ID
// app.get('/user/:id', function (req, res, next) {
// 	console.log('another route for same path');
//   res.end(req.params.id);
//   next();
// }, function(req, res){
// 	console.log("Cookies: ", req.cookies);
// });

// templates and template engines - using EJS as an example to render to response object

// app.set('view engine', 'ejs');
// app.use('/styles', express.static(__dirname+'/public'));
// app.get('/', function (req, res){
// 	res.render('index');
// });

// app.get('/user/:id', function (req, res){
// 	res.render('user',{ ID: req.params.id});
// });

// query string and post parameters
// app.get('/', function (req, res){
// 	res.render('index');
// });

// app.get('/user/:id', function (req, res){
// 	res.render('user',{ ID: req.params.id, Qstr: req.query.qstrg});	
// });


//pody parser for post parameters

var express = require('express');
var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');


var app = express();
app.set('view engine', 'ejs');
// app.use(cookieParser());
// app.use('/styles', express.static(__dirname+'/public'));
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// var jsonParser = bodyParser.json();

// app.get('/', function(req,res){
// 	res.render('index');
// });
// app.post('/user', urlencodedParser, function (req, res){
// 	res.send('Thank you!');
// 	console.log(req.body.firstname);
// 	console.log(req.body.lastname);
		
// });

// app.post('/userjson', jsonParser, function (req, res){
// 	res.send('Thank you for JSON data');
// 	console.log(req.body.firstname);
// 	console.log(req.body.lastname);
		
// });
//RESTful API and JSON
//  app.get('/api/user:id', urlencodedParser, function (req, res){
// 	 //get data from the database
// 	 res.json({firstname: 'John', lastname: 'Doe'})
//  });


//  app.post('/api/user', urlencodedParser, function (req, res){
// 	 //save to the database
//  });

//  app.post('/api/user:id', function (req, res){
// 	 //delete from the database
//  });


// express router for structuring the all

var htmlController = require('./controllers/htmlControllers');
var apiController = require('./controllers/apiControllers');

htmlController(app);
apiController(app);

var port = process.env.PORT || 3000;

app.listen(port);