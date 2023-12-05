var express = require('express');
var router = express.Router();
const Space = require("../models/space").Space


/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Space.find({}, { _id: 0, title: 1, nick: 1 });
    res.cookie('greeting','Hi!!!').render('index', { title:'Space', menu:menu });}
    catch (err) {next(err);}
});



module.exports = router;