/**
 * Created by 정보실 on 2015-06-18.
 */
var net = require('net');
var client = new net.Socket();
client.connect(5000,'127.0.0.1',function(){
    console.log('연결');
    client.write('안녕');
})
client.on('data', function(data) {
    console.log('Received: ' + data);

});
