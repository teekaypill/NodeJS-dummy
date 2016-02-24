module.exports = function(app){
	
		app.get('/api/user:id', function (req, res){
		//get data from the database
		res.json({firstname: 'John', lastname: 'Doe'})
		});
	
	
		app.post('/api/user', function (req, res){
		//save to the database
		});
	
		app.post('/api/user:id', function (req, res){
		//delete from the database
		});
}