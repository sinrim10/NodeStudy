var fs=require('fs');
var tls=require('tls');
var host='127.0.0.1';
var port=3002;

var options={
	key:fs.readFileSync('openssl-0.9.8k_X64/bin/client.pem'),
	cert:fs.readFileSync('openssl-0.9.8k_X64/bin/client.crt')
};

var client=tls.connect(port, host, options, function(){
    
    console.log('authorized:'+client.authorized);
	console.log('connected');

	client.on('data',function(data){
	     console.log('data:'+data);
	});

	client.write('Hello');
});