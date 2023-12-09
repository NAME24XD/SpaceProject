var express = require('express');
var router = express.Router();
var Space = require("../models/space").Space
var async = require("async");
const checkAuth = require('../middleware/checkAuth');


router.get('/:nick', checkAuth, async function(req, res, next) {
  try {
    const [space, sps] = await Promise.all([Space.findOne({ nick: req.params.nick })]);
  
    if (!space) {
      throw new Error("Нет такой планеты во вселенной");
    }
    
    renderSpace(res, space.title, space.avatar, space.desc, sps);
  } catch (err) {
    next(err);
  }
});

function renderSpace(res, title, picture, desc, sps) {
  console.log(sps);

  res.render('space', {
    title: title,
    picture: picture,
    desc: desc,
  });
}


module.exports = router;
