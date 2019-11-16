const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:gm1929hw@mflix-9ady0.mongodb.net/sample_mflix?retryWrites=true&w=majority"

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).catch(err=> {
  console.error(err)
})

const dbConnection = mongoose.connection;

dbConnection.once('open', () => {
  console.log('Database is connected');
})
dbConnection.on('error', err => {
  console.error(err);
});


module.exports = dbConnection;
