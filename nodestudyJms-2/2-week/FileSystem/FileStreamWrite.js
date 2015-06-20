/**
 * New node file
 */
var fs = require('fs');
var stream = fs.createWriteStream('test2.txt');
 
var interval = setInterval(function() {
  stream.write((new Date()).toString()+'\n\r');
}, 1000);
 
setTimeout(function() {
  clearInterval(interval);
  stream.end();
}, 5000);