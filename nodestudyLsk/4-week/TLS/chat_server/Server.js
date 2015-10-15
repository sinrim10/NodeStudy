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
    console.log(from);
    clients.forEach(function(client){
        if(client !== from){
            client.write(socket + ":" + /*socket.remotePort + */' said : ' + data);
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

server.listen(port,function(){
    console.log('다음 포트 리스닝 : ', server.address().port,server.address());
});


/*
var server = tls.createServer(serverOptions, function(cleartextStream) {

    //Show the certificate info as supplied by the client
    console.log(cleartextStream.getPeerCertificate());

    console.log('server connected',
        cleartextStream.authorized ? 'authorized' : 'unauthorized');
    cleartextStream.write("welcome!\n");
    cleartextStream.setEncoding('utf8');
    cleartextStream.pipe(cleartextStream);
});
server.listen(443, function() {
    console.log('server bound');
});*/
