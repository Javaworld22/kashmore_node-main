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

/* GET test 1. */
router.get('/ren-dos', function(req, res, next) {
  res.send('renccas fendos!');
});

/* GET test. */
router.get('/check-wally', function(req, res, next) {
  res.send('checkers world!');
});

/* GET test 2. */
router.get('/check-soft', function(req, res, next) {
  res.send('jigga byte!');
});

/* GET test 2. */
router.get('/check-rest', function(req, res, next) {
  res.send('jigga dog!');
});

/* GET check for server working. */
router.get('/check-service', function(req, res, next) {
  res.send('express');
});

module.exports = router;
