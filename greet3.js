function greetr(){
	this.greeting = 'Hello world 3';
	this.greet = function (){
		console.log(this.greeting);
	} ;
	
}

module.exports = greetr;