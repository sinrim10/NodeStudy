/**
 * Created by Administrator on 2015-06-12.
 */
//계산을 위임하는 노드 프로세스 생성

var spawn = require('child_process').spawn;
//plus_on.js 실행해 새노드 프로세스를 생성
var child = spawn('node', ['plus_one.js']);

setInterval(function(){
    var number = Math.floor(Math.random() *10000);

    child.stdin.write(number+'\n');//숫자를 자식 프로세스로 전송

    child.stdout.once('data',function(data){ // stdout.on 으로하면 여러개의 콜백함수를 등록하게 됨.
        console.log('자식 프로세스가' + number + '를 가지고' + data +'로 응답함');
    });
},1000);

child.stderr.on('data',function(data){
    process.stdout.write(data);
})