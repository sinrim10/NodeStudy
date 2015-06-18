/**
 * TCP ( Transmission Control Protocol )
 * 연결지향이며, 자체적으로 오류를 처리하여, 네트워크 전송중 순서가 뒤바뀐
 * 메시지를 교정 시켜주는 역할을 한다.
 * 데이터의 신뢰도가 중요하다고 판단될때 주로 사용한다.
 */

var net = require('net');
var server = net.createServer(function (c){
	
	console.log('server connected');
	
	c.on('end',function(){
		
		console.log('server disconnected');
		
	})
	
	c.write('hello\r\n');
	c.pipe(c);
	
});

server.listen(8124,function(){
	
	console.log('server bound');
	
})