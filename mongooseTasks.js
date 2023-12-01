const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test1');

const CatSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  nick: {
    type: String,
    required: true
  }
});

const Cat = mongoose.model('Cat', CatSchema);

const cat = new Cat({
  title: "Квазар",
  nick: "quasar"
});

console.log(cat);

cat.save()
  .then(savedCat => {
    console.log(savedCat);
  })
  .catch(error => {
    console.error(error);
  });
