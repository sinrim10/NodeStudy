/**
 * Created by Administrator on 2015-06-12.
 */
var env = process.env
    ,varName
    ,envCopy = {}
    ,exec = require('child_process').exec; //등록된 환경변수
/*console.log(env);*/

//환경변수 복사
for(varName in env){
    //console.log(varName);
    envCopy[varName] = env[varName];
}
//console.log(envCopy);

envCopy['CUSTOM ENV VAR'] = 'some value';
envCopy['CUSTOM ENV VAR 2'] = 'some other value';

//process.env 및 커스텀 변수를 사용해 명령을 실행한다.
exec('dir',{env:envCopy,encoding:'ascii'},function(err,stdout,stderr){
    if(err) throw err;
    console.log('stdout: ',stdout);
    console.log('stderrL',stderr);
});
