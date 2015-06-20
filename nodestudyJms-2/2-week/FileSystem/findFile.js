/**
 * New node file
 * 출처 : 머드 초보
 * http://mudchobo.tistory.com/
 * 
 */
var fs = require('fs');

function findFile(path, searchFile, callback){
    function isMatch(err, stats, file){
        if(err) { return callback(err); }
        if(stats.isFile() && file == searchFile) {
            callback(undefined, path + '/' + file);
        } else if (stats.isDirectory()){
            statDirectory(path + '/' + file, isMatch);
        }
    }
    statDirectory(path, isMatch);
}

function statDirectory(path, callback){
    fs.readdir(path, function(err, files){
        if(err) { return callback(err); }
        files.forEach(function(file){
            fs.stat(path + '/' + file, function(err, stats){
                callback(err, stats, file);
            });
        });
    });
}

findFile('D:\mp3', '[Beatles]-Let it be.mp3', function(err, path) {
  if(err) { throw err; }
  console.log('Found file at: '+path);
});