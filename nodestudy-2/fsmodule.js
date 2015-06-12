/**
 * Created by Administrator on 2015-06-09.
 */

var fs = require("fs");
/*//파일정보 비동기
fs.stat('calcmodule.js',function(err, stats){

    if(!err){
        console.log(stats);
    }
});


//파일읽기 동기
var text = fs.readFileSync('test.txt','utf8');
console.log(text);
//비동기
fs.readFile('test.txt','utf8',function(err,data){
    console.log(data);
})

var data = '안녕하세요 반갑습니다231312';
//파일이 없으면 생성한다.
fs.writeFile('text.txt',data,'utf8',function(err){
    if(!err) console.log('비동기 파일 쓰기 완료');//새로쓴다
});

fs.writeFileSync('text2.txt',data,'utf8');
console.log('동기 파일 쓰기 완료');*/
//예외처리
/*
try{
    var data = fs.readFileSync('test1.txt','utf8');
    console.log(data);
}catch(err){
    console.log(err);
}

try{
    fs.writeFileSync('text2.txt','안녕하세요','utf8');
    console.log('파일쓰기 성공');
}catch(err){
    console.log(err);
}
*/

/*fs.exists('text.txt',function(exists){
    console.log(exists? "있음":"없음");
});

fs.open('text3.txt','w',function(err,fd){
    if(err)throw err;
    console.log('파일 열기');
});
//파일 읽기 버퍼저장
fs.open('test.txt','r',function opend(err,fd){
     if(err) throw err;
    var readBuffer = new Buffer(1024,'utf8'),
        bufferOffset = 0,
        bufferLength = readBuffer.length,
        filePosition = 100;
        fs.read(fd,readBuffer,bufferOffset,bufferLength,filePosition,function read(err,readBytes){
        console.log('읽은 바이트 :' + readBytes + '바이트');
            if(readBytes >0){
                console.log(readBuffer.slice(0,readBytes))
                console.log(readBuffer.toString());
            }
        });
    });

fs.open('text2.txt','a',function(err,fd){
    if(err) throw err;
    var writeBuffer = new Buffer('글쓰기','utf8'),
        bufferPosition = 0,
        bufferLength = writeBuffer.length,
        filePosition = null;
    fs.write(fd,writeBuffer,bufferPosition,bufferLength,filePosition,function(err,written){
        if(err) throw err;
        console.log('쓴 바이트: ' + written + ' 바이트');
    })
});*/

//파일시스템 스트림의 생성
var readStream = fs.createReadStream('test.txt',{start:111,end:140});
readStream.on('data',function(buffer){
    console.log(buffer.toString());
})