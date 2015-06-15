/**
 * New node file
 */


var spawn = require('child_process').spawn;
	ls = spawn('ls', ['-1h','/usr']);
	//ls = spawn('dir', ['-1h','/usr']);

	ls.stdout.on('data', function(data){
		console.log('stdout : ' + data);
	});
	
	ls.on('close',function( code){
		console.log('child process exited width code ' + code);
	})
	
	/*
	    리눅스 시스템에서 파일 디렉토리 구조를 확인하는 ls 명령어를 spawn 시키고 있다.
	  ls를 실행시키고 이에 대해 표준 출력에 data가 발생하면 이 data를 출력하고, ls가 완료되면 프로그램이 종료된다. 
	
	*/