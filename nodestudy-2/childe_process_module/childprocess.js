/**
 * Created by Administrator on 2015-06-12.
 */
var child_process = require('child_process');
var exec = child_process.exec;
var option = {timeout:100,
                encoding:'ascii',
                killSignal:'SIGKILL'}
exec('dir',option,function(err,stdoout,stderr){
        setTimeout(function(){
            console.log('타임')
        },1000)
    console.log(stdoout);
});