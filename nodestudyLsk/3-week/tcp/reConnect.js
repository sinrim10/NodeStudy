
var net = require('net');
var port = 5000;
var conn;

var retryInteval = 3000;
var retriedTimes = 0;
var maxRetries = 10;

process.stdin.resume();

(function connect(){
    function reconnect(){
        if(retriedTimes >= maxRetries){
            throw new Error('최대 재시도 횟수 초과. 재접속 포기');
        }
        retriedTimes += 1;
        setTimeout(connect, retryInteval);
    }

    conn = net.createConnection(port);

    conn.on('connect',function(){
        retriedTimes = 0;
        console.log('서버 연결');
    });

    conn.on('error',function(err){
        console.log('연결중 에러발생 : ',  err);
    });

    conn.on('close',function(){
        console.log('커넥션 닫힘. 재연결 시도');
        reconnect();
    });
    process.stdin.pipe(conn,{end:false});

}());