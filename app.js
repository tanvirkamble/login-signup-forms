require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

//import routes
const loginRoute = require('./routes/routes');
const DB = require('./db/db');

// Use the articlesRoutes middleware
app.use('/', loginRoute);

//mongoose.connect('mongodb://127.0.0.1:27017/userDB');
const start = async () => {
  await DB(process.env.MONGODB_URL);
  app.listen('3000', () => {
    console.log('server is connected to 3000 port');
  });
};

start();
