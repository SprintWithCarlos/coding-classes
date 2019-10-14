
const mongoose = require('mongoose');


const db = mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const { connection } = mongoose;
connection.once('open', () => {
  console.log('Db is connected');
});
module.exports = db;
