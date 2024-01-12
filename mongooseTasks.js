const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test1');

const SpaceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  nick: {
    type: String,
    required: true
  }
});

const Space = mongoose.model('Space', SpaceSchema);

const space = new Space({
  title: "Квазар",
  nick: "quasar"
});

console.log(space);

space.save()
  .then(savedSpace => {
    console.log(savedSpace);
  })
  .catch(error => {
    console.error(error);
  });
