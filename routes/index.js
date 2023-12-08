var express = require('express');
var router = express.Router();
const Space = require("../models/space").Space;
const User = require("../models/User").User;


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
  User.findOne({username:username},function(err,user){
        if(err) return next(err)
        if(user){
            if(user.checkPassword(password)){
                req.session.user = user._id
                res.redirect('/')
          } else {
                res.render('logreg', {title: 'Вход'})
        }
        } else {
          var user = new User({username:username,password:password})
                user.save(function(err,user){
                     if(err) return next(err)
                      req.session.user = user._id
                      res.redirect('/')
                })
          }
        })
});



module.exports = router;