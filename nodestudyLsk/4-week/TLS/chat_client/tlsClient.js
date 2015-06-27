/*
/!**
 * Created by Administrator on 2015-06-22.
 *!/
var tls = require('tls');
var fs = require('fs');

var port = 4001;
var host = '0.0.0.0';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
var option = {
    key : fs.readFileSync('client_key.pem'),
    cert : fs.readFileSync('client_cert.pem')
};

process.stdin.resume();

var client = tls.connect(port,host,option,function(){
    console.log('연결됨');
    process.stdin.pipe(client,{end:false});
    client.pipe(process.stdout);
})*/
/**
 * Created by Administrator on 2015-06-22.
 */
var tls = require('tls');
var fs = require('fs');

var port = 4001;
var host = '0.0.0.0';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
var options = {
    key : fs.readFileSync('client_key.pem'),
    cert : fs.readFileSync('client_cert.pem')
};

var cleartextStream = tls.connect(4001,options, function() {
    console.log('client connected',
        cleartextStream.authorized ? 'authorized' : 'unauthorized');
    process.stdin.pipe(cleartextStream);
    process.stdin.resume();
});
cleartextStream.setEncoding('utf8');
cleartextStream.on('data', function(data) {
    console.log(data);
});
cleartextStream.on('end', function() {
    server.close();
});