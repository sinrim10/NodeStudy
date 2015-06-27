var https = require('https');
var fs = require('fs');

var options;
options = {
    key: fs.readFileSync('../ssl/key.pem')
    , cert: fs.readFileSync('../ssl/key-cert.pem')
};

https.createServer(options, function (req, res)  {
    res.writeHead(200);
    res.end("hello world\n");
}).listen(3000);