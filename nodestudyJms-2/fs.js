/**
 * test
 */

// 파일 시스템 정의
var fs = require('fs');

var files;

// 디렉토리 읽기
fs.readdir("D:\\App",function(err,list){
	
	console.log(list);
	files = list;
});



// 파일 생성
/*
fs.writeFile("D:\\App\\test.txt",'hello world! by nodejs','UTF-8',function(err){
	if(err) throw err;
	console.log('file writered!');
});

*/

fs.stat("test2.txt",function (err, stats){
	if(err){
		
		fs.writeFile("test2.txt",'hello world! by nodejs~!','UTF-8',function(err){
			if(err) throw err;
			
		});		
		
	}
	// 파일 전재하면 읽기
	if(stats.isFile()){
		fs.readFile("d:\\App\\test2.txt", function(err, data) {
			console.log(data);
		})
	}
	
});



