const mongoose = require("mongoose");

/*const URI = process.env.MONGOATLAS
  ? process.env.MONGOATLAS
  : 'mongodb://localhost/swc-rest-api';*/

const URI = "mongodb://localhost/swc-rest-api";

// const URI = 'mongodb://localhost/prueba'
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const dbConnection = mongoose.connection;

dbConnection.once("open", () => {
  console.log("Database is connected");
});

module.exports = dbConnection;
