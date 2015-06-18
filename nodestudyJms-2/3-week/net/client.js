/**
 * New node file
 */

var net = require('net');

var client = net.connect({port:8124},
	function(){
		console.log('client connected');
		// 접속 후 client 에서 데이터 전송
		client.write('world!\r\n');
	
});

// 받는애
client.on('data',function(data){
	
	console.log(data.toString());
	client.end();
	
});

// 끝날때 로그 부분
client.on('end',function(){
	console.log('client disconnected');
})