/**
 node.js에서는 UDP를 'Datagram' 또는 'dgram'이라 불린다. 
 UDP 프로그래밍을 시작하려면 먼저 기본적인 소켓부터 생성해야 한다.

*/


var dgram 	= require("dgram");
var server 	= dgram.createSocket("udp4");

// 에러 발생시 처리
server.on("error",function(err){
	console.log("server error : \n " + err.stack);
	server.close();
	
});
// 메시지 전달 받는 부분
server.on("message",function(msg, rinfo){
	console.log("server got : " + msg + " from  " + rinfo.address + " : " +rinfo.port);
	
});
// 서버 상태
server.on("listening",function(){
	var address = server.address();
	console.log("server listening " + address.address + " : " + address.port);
});

server.bind(11234);