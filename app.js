const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const product = require('./routes/product.route');
require('dotenv').config();
const app = express();

app.use('/products', product);

let PORT = 1234;

app.listen(PORT, () => { console.log('\n >>>> Server is up and running on port', PORT, ' <<<<<') });

// `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@claw85-l78sx.mongodb.net/test?retryWrites=true&w=majority`


const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@claw85-l78sx.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
