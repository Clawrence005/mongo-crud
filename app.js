const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const product = require('./routes/product.route');
const user = require('./routes/user.route');
// Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@claw85-l78sx.mongodb.net/test`;


const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', product);
app.use('/users', user);

let port = 1234;

app.listen(port, () => {
  console.log('Server is up and running on port  ' + port);
});