/**
 * Created by Administrator on 2015-06-11.
 */
var url = require('url'),
http = require('http'),
qs = require('querystring');
var fs = require('fs');

http.createServer(function(req,res){
    var url_parts = url.parse(req.url,true);

    console.log(url_parts.path);
    var destinationFile = fs.createWriteStream(url_parts.path.replace("/",""));
            res.writeHead(200);
            req.pipe(destinationFile);
            var fileSize = req.headers['content-length'];
            var uploadBytes = 0;
            req.on('data',function(d){
                uploadBytes += d.length;
                var p =  (uploadBytes/fileSize)*100;
                console.log('uploading ' + parseInt(p)+"%\n");
                res.write('uploading ' + parseInt(p)+"%\n");
            });

            req.on('end',function(){
                console.log('완료')
                res.end('파일 업로드 완료');
            });

}).listen(8080,function(){ console.log('서버 start');});
