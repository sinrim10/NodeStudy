var amqp = require('amqp');

var rabbit = amqp.createConnection({ host: 'localhost'
    , port: 5673
    , login: 'no1kkp0326'
    , password: '86042323'
    //, vhost: '/'
});

console.log("start");

rabbit.on('ready', function(){
  rabbit.queue('first-queue-name', {autoDelete: false}, function(q){
      console.log(rabbit);
    q.bind('my-first-exchange', 'first-queue');
    q.subscribe(function(message, headers, deliveryInfo, messageObject){
      console.log(message);
      console.log(headers);
      console.log(deliveryInfo);
      console.log(messageObject);
    });
  });
});
