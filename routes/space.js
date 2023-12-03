var express = require('express');
var router = express.Router();
var Space = require("../models/space").Space
var async = require("async")


router.get('/:nick', async function(req, res, next) {
  try {
    const [space, sps] = await Promise.all([
      Space.findOne({ nick: req.params.nick }),
      Space.find({}, { _id: 0, title: 1, nick: 1 })
    ]);
  
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
    menu: sps
  });
}


module.exports = router;
