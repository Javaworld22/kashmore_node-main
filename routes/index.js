var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET check for server working. */
router.get('/check-service', function(req, res, next) {
  res.send('express');
});

/* GET test. */
router.get('/checkers', function(req, res, next) {
  res.send('Checkers Galleria!');
});


module.exports = router;
