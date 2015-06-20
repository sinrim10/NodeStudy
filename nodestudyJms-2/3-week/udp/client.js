/**
 * 메시지 전송 
 */

var dgram = require('dgram');
var message = new Buffer("wwwwwwwwwwwwwwwww");
var client = dgram.createSocket("udp4");

// 메시지 전송
client.send(message	,	0,	message.length	, 11234, "localhost", function (err, bytes){
	client.close();
});
