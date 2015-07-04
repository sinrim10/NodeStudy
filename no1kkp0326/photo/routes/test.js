var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test');
});

module.exports = router;

/*
 var express = require('express');
 var router = express.Router();


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;

 */
