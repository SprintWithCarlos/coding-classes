require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const { error404, errorHandler } = require('./routes/errorRoutes');
// DB
require('./db/connection');
// config
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
// Model

app.use('/api', authRoutes);
app.use('/api', postRoutes);
app.use('/api', userRoutes);
app.use(error404);
app.use(errorHandler);

app.listen(app.get('port'), () => {
  console.log(`Listening on Port ${app.get('port')}`);
});
