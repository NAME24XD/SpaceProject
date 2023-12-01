const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema = new mongoose.Schema({ name: String });

schema.methods.spas = function () {
  console.log(this.get("name") + " сказал boom");
}

const Space = mongoose.model('Space', schema);
const sps = new Space({ name: 'Пушок' });

const saveSpace = async () => {
  try {
    await sps.save();
    sps.spas();
  } catch (error) {
    console.error(error);
  }
}

saveSpace();
