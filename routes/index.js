var express = require('express');
var router = express.Router();
const Space = require("../models/space").Space


/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Space.find({}, { _id: 0, title: 1, nick: 1 });
    res.render('index', {
      title: 'Space',
      menu: menu
    });
  } catch (err) {
    next(err);
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
res.cookie('greeting',
'Hi!!!').render('index'
, { title:
'Space'
, menu:menu });
});


module.exports = router;