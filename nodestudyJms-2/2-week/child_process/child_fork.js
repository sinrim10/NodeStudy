/**
 * New node file
 */

process.on('message',function(m){
	
	console.log(' child got message : ' + m);
	
});

process.send({foo:'bar'});

process.exit();