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
      if(spaces.length == 0) return next(new Error("нет такой планеты"))
        var space = spaces[0];
        res.render('space', {
          title: space.title,
          picture: space.avatar,
          desc: space.about
  })
}
})
});

module.exports = router;