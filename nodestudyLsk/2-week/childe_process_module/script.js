/**
 * Created by Administrator on 2015-06-12.
 */
// script.js
/*
var exec = require('child_process').exec;
exec('node ./server.js', function(error, stdout, stderr) {
    console.log('stdout: ', stdout);
    console.log('stderr: ', stderr);
    if (error !== null) {
        console.log('exec error: ', error);
    }
});*/
//자식 프로세스의 데이터 수신방법
var exec = require('child_process').exec;
var child = exec('node ./server.js');
child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.on('close', function(code) {
    console.log('closing code: ' + code);
});