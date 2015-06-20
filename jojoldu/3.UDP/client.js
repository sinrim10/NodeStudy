/**
	2-3. UDP/Datagram Sockets 방식 - client
**/

var PORT = 3001;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var message = new Buffer('안녕하세요');

var client = dgram.createSocket('udp4');

//dgram.send(buf, offset, length, port, address, [callback])
client.send(message, 0, message.length, PORT, HOST, function(exception, bytes) {
    if (exception){
    	throw exception;	
    } 
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client.close();
});