var tls = require('tls');
var fs = require('fs');
var https = require('https');

var options = {
	key : fs.readFileSync('openssl-0.9.8k_X64/bin/server.pem'),
	cert : fs.readFileSync('openssl-0.9.8k_X64/bin/server.crt'),
	passphrase : 'jojoldu',
	requestCert : true,
	rejectUnauthorized: false,
	ca: [ fs.readFileSync('openssl-0.9.8k_X64/bin/client.crt') ]
}

var server = tls.createServer(options, function(socket){
	
	console.log('server connected', socket.authorized? 'authorized' : 'unauthorized');
	socket.write('welcome! \n');
	socket.setEncoding('utf8');
	socket.pipe(socket);
});

var port = 3002;
server.listen(port, function(){
	console.log('server bound');
});






