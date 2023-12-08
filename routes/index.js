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


module.exports = router;