/**
 * New node file
 */

process.on('message',function(m){
	console.log('CHILD got message :' , m);
})

process.send({foo:'bar'})