/**
 * Created by Administrator on 2015-06-22.
 */
var tls = require('tls');
var fs = require('fs');
var port = 4001;

var clients = [];

var serverOptions = {
    key : fs.readFileSync('server_key.pem'), //개인키
    cert : fs.readFileSync('server_cert.pem') // 인증서 파일
};

function distribute(from, data){
    var socket = from.socket;
    clients.forEach(function(client){
        if(client !== from){
            client.write(socket.remoteAddress + ":" + socket.remotePort + ' said : ' + data);
        }
    });
}

var server = tls.createServer(serverOptions , function(client){
    clients.push(client);
    client.on('data',function(data){
        distribute(client,data);
    });

    client.on('close',function(){
        console.log('커넥션 닫힘');
        clients.splice(clients.indexOf(client),1);
    });

});

server.listen(port);