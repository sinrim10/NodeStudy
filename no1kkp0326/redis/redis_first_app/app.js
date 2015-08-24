var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  redis = require('redis'),
  //client = redis.createClient(port,host,options),
    //client = redis.createClient(),
  flow = require('flow-maintained');

client = redis.createClient(6379, "127.0.0.1");
client.auth("", function() {console.log("Connected!");});

console.log(client);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  GetMessages(function(messages){
    res.render('index', {messages: messages});
  });
});

app.post('/', function(req, res){
  var username = req.body.username;
  var name = req.body.name;
    console.log(username, name);
  GetUserID(username, name, function(userid){
    AddMessage(req.body.message, userid, function(messid){
      console.log('Added message: ' + messid);
      res.redirect('/');
    });
  });
});

app.listen(8003);

function GetUserID(username, name, cb){
  client.get('user:' + username, function(err, userid){
    if(userid){
      cb(userid);
    }else{
      CreateUser(username, name, function(new_user){
        cb(new_user);
      });
    }
  });
};

function CreateUser(username, name, cb){
  client.incr('next:user:id', function(err, userid){
    flow.exec(
      function(){
        var user_string = 'user:' + userid;
        client.set('user:' + username, userid, this.MULTI());
        client.hset(user_string, 'name', name, this.MULTI());
        client.hset(user_string, 'username', username, this.MULTI());
      },function(args){
        cb(userid);
      }
    );
  });
};

function AddMessage(message, userid, cb){
  client.incr('next:message:id', function(err, id){
    flow.exec(
      function(){
        var mess_id = 'message:' + id;
        client.set(mess_id, message, this.MULTI());
        client.set(mess_id + ':user', userid, this.MULTI());
        client.lpush('messages', id, this.MULTI());
      },function(){
        cb(id);
      }
    );
  });
};

function GetMessages(cb){
  flow.exec(
    function(){
      client.lrange('messages', 0, -1, this);   //레디스에 모든 데이터를 요청, limit 0,9 는10개 그다음은 10,19 이런식으로!!
    },function(err, messages){
      //an async foreach
      var final_messages = [];
      flow.serialForEach(messages, function(el){
        FetchMessage(el, this);
      },function(mess){
        final_messages.push(mess);
      },function(){
        cb(final_messages);
      });
    }
  );
};

function FetchMessage(id, cb){
  client.get('message:' + id, function(err, message){
    client.get('message:' + id + ':user', function(err, userid){
      client.hget('user:' + userid, 'name', function(err, name){
        cb({message: message, name: name});
      });
    });
  });
};
