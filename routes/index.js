var express = require('express');
var router = express.Router();
const Space = require("../models/space").Space


/* GET home page. */  
  router.get('/', async(req, res, next) => {
    try{
      res.render('index', { title: 'Space', counter:req.session.counter });
    }
    catch (err) {next(err);}
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
res.render('logreg',{title: 'Вход'});
});

/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
});

module.exports = router;