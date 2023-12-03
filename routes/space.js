var express = require('express');
var router = express.Router();
var Space = require("../models/space").Space

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Новый маршрутизатор, для маршрутов, начинающихся с space');
// });

// router.get("/:nick", function(req, res, next) {
// res.send(req.params.nick);
// });

router.get('/:nick', async function(req, res, next) {
  try {
    const [space, sps] = await Promise.all([
      Space.findOne({ nick: req.params.nick }),
      Space.find({}, { _id: 0, title: 1, nick: 1 })
    ]);
  
    // console.log(space.title)
    // console.log(sps)

    if (!space) {
      throw new Error("Нет такого");
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
