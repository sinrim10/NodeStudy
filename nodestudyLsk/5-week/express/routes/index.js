var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home');
});
router.get('/signin', function(req, res) {
  res.render('signin');
});
module.exports = router;
