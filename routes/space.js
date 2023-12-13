var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
// var Space = require("../models/space").Space
// const checkAuth = require('../middleware/checkAuth');


router.get("/:nick", function(req, res, next) {
  db.query(`SELECT * FROM spaces WHERE spaces.nick = '${req.params.nick}'`, (err,spaces) => {
  if(err) {
    console.log(err);
    if(err) return next(err)
    } else {
      if(spaces.length == 0) return next(new Error("Такого пышного древа нет"))
        var space = spaces[0];
        res.render('space', {
          title: space.title,
          picture: space.avatar,
          desc: space.about
  })
}
})
});

router.get('/', function(req, res, next) {
  res.send('<h1>Это экран для списка планет</h1>');
  });
  

router.get("/:nick", function(req, res, next){
  db.query(`SELECT * FROM space WHERE space.nick = '${req.params.nick}'`, (err, spaces) => {             
      if(err) {
          console.log(err);
          if(err) return next(err)
      } else {
          if(spaces.length == 0) return next(new Error("Нет такой планеты во вселенной"))
          var space = spaces[0];
          res.render('space', {
          title   : space.title,
          picture : space.avatar,
          about   : space.about
      })}
  })
})

// function renderSpace(res, title, picture, desc, sps) {
//   console.log(sps);

//   res.render('space', {
//     title: title,
//     picture: picture,
//     desc: desc,
//   });
// }


module.exports = router;