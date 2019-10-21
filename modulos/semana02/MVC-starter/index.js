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
// Error Handling
app.use((req, res, next) => {
  const error = new Error('Página no encontrada');
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.render('404', { error });
  next();
});

// Server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
