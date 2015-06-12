/**
 * New node file
 */


var cp = require('child_process');
var spawn = cp.spawn;

var n = cp.fork('child.js');

n.on('message',function(m){
	
	console.log("PARENT got message : " + m);
})

n.send({hello : 'world'});
n.on('close',function(code, signal){
	console.log('chil process terminated due to receipt of signal ' + signal);
	setTimeout(function(){
		console.log('restarting ....');
		cp.fork('child.js');	
	},5000)
});

