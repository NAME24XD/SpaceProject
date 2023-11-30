const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost/test');
    console.log('Успешное подключение к базе данных');

    const spaceSchema = new mongoose.Schema({ name: String });
    const Space = mongoose.model('Space', spaceSchema);

    const space = new Space({ name: 'Квазар' });
    await space.save();
    console.log('Бум');
  } catch (error) {
    console.error('Ошибка подключения к базе данных:', error);
  }
}

connectToDatabase();
