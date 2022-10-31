var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET test. */
router.get('/check-gally', function(req, res, next) {
  res.send('checkers galleria!');
});

module.exports = router;
