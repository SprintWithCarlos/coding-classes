require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const db = require('./database');
const authRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(morgan('dev'));

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
