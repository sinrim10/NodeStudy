// server.js에서 wines.js 모듈 로딩
var express = require('express'),
    wines = require('./routes/wines');

var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);
app.post('/wines', wines.addWine);
app.put('/wines/:id', wines.updateWine);
app.delete('/wines/:id', wines.deleteWine);

app.listen(3000);
console.log('Listening on port 3000...');
