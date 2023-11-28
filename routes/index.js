var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mars', function(req, res, next) {
res.send("<h1>Страница марса</h1>")
});

router.get('/mercury', function(req, res, next) {
res.send("<h1>Страница меркурия</h1>")
});

router.get('/earth', function(req, res, next) {
res.send("<h1>Страница земли</h1>")
});

module.exports = router;
