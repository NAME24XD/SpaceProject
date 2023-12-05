var express = require('express');
var router = express.Router();
const Space = require("../models/space").Space


/* GET home page. */  
  router.get('/', async(req, res, next) => {
    try{
      const menu = await Space.find({}, { _id: 0, title: 1, nick: 1 });
      res.render('index', { title: 'Space', menu:menu,counter:req.session.counter });
    }
    catch (err) {next(err);}
});


module.exports = router;