/**
 * Created by Administrator on 2015-06-12.
 */
//child prcess
var http = require('http');
var exec = require('child_process').exec;
var visits = 0;

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    visits +=1;
    var msg = 'Visits : ' + visits;
    res.end(msg + '\n');
    console.log(msg);
    if(visits == 5 ){
        process.exit();
    }
}).listen(8080,function(){
    console.log('server start');
});