const path = require('path');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/');

const app = express();


// Config
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
  
// Routes
app.use(routes);

// Server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
