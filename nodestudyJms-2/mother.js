
/*


node.js 에서 spawn 과 exec 의 차이
출처  : http://ohgyun.com/453

`spawn`과 `exec`가 하는 작업은 동일하지만, 

`spawn`은 스트림(stream)을 리턴하고, `exec`는 버퍼(buffer)를 리턴한다.

`spawn`은 `stdout`과 `stderr` 스트림을 포함한 객체를 리턴한다.
자식 프로세스의 표준 출력을 `stdout` 객체로 받아 처리할 수 있다.
`stdout` 객체는 `data`와 `end` 등의 이벤트를 발생한다.
`spawn`은 자식 프로세스로부터 많은 양의 데이터를 받는 경우에 유용한다.
예) 이미지 프로세싱이나 바이너리 데이터를 읽어오는 등


`exec`는 자식 프로세스 버퍼의 아웃풋을 리턴한다.
버퍼의 사이즈는 기본값은 200k이다.
만약, 자식 프로세스가 버퍼 사이즈보다 더 큰 값을 리턴하면,
"Error: maxBuffer exceeded" 오류가 나면서 프로그램이 종료될 것이다.
버퍼 사이즈를 크게 늘리면 해결할 수는 있으나,
`exec`는 큰 사이즈의 버퍼 처리를 위한 것이 아니다.
이런 경우라면 `spawn`을 사용하는 게 적합하다.
`exec`는 데이터 대신 상태 정도의 작은 결과를 출력하는 프로그램을 실행하는 용도로 사용한다.

또 하나,
`spawn`은 비동기로 실행하고, 결과도 비동기로 받는다.
`exec`는 동기로 실행하고, 결과는 비동기로 받는다.

정리: 자식 프로세스로부터 큰 바이너리 데이터를 리턴받는 경우라면 `spawn`을,
간단한 상태 메시지만 받는 것이라면 `exec`를 쓴다.


 */
var cp = require('child_process');

var spawn = cp.spawn;

var n = cp.fork('child_fork.js');

n.on('message',function (m){
	
	console.log('parent got message : ' + m);
	
})

n.send({hello:'world'})

n.on('close',function(code, signal){
	
	console.log('child process terminated dute to receipt of signal ' + signal);
	
	setTimeout(function(){
		console.log('restarting ...' );
		cp.fork('child_fork.js');
		
	},5000);
	
})