/**
 * Created by no1kkp0326 on 2015-06-25.
 */

var http = require('http');
var url = require('url');
var items = [];

http.createServer(function (req, res) {
    switch (req.method) {
        case 'POST':
            var item = '';
            req.setEncoding('utf-8');
            req.on('data', function(chunk){
                item+=chunk;
            });
            req.on('end', function(){
                items.push(item);
                res.end('OK\n');
            });
            break;
        case 'GET':
            items.forEach(function(item, i){
                res.write(i+')'+item+'\n');
            });
            res.end();
            break;
    }

    /*
    req.setEncoding('utf8');
    req.on('data', function(chunk){
        console.log('parsed', chunk);
    });
    req.on('end', function(){
        console.log('done parsing');
        res.end();
    });
    */
    /*
    var body = 'hello world\n';
    //res.setHeader('Content-Length', body.length);
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 302;
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(body);
    */
}).listen(1337, 'localhost');
console.log('Server running at localhost');

// ip : 58.229.240.136 d
