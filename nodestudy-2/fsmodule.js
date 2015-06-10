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
