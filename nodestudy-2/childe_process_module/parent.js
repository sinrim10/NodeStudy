/**
 * Created by Administrator on 2015-06-12.
 */
var exec = require('child_process').exec;
exec('node child.js',{env :{number:123}},function(err,stdout,stderr){
    if(err) throw err;
    console.log('stdout:\n',stdout);
    console.log('stderr:\n',stderr);
});