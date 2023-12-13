const Space = require("./../models/space").Space;
module.exports = async function(req, res, next) {
    try {
      res.locals.nav = [];

    const result = await Space.find({}, { _id: 0, title: 1, nick: 1 });
        res.locals.nav = result;
        next();
    } catch (err) {
      throw err;
}};
