/**
 UDP ( User Datagram Protocol )
 node.js에서는 UDP를 'Datagram' 또는 'dgram'이라 불린다. 
 UDP 프로그래밍을 시작하려면 먼저 기본적인 소켓부터 생성해야 한다.

 비연결지향이며, 오류를 처리하거나 순서를 재조합 시켜주는 기능을 가지고 있지 않다.
 단순히 데이터를 받거나, 던져주기만 하는 프로토콜이다.
 UDP는 특히 실시간 멀티미디어 정보를 처리하기 위해서 주로 사용된다.
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