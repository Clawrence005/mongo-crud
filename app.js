// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const product = require('./routes/product.route');
// require('dotenv').config();

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/products', product);

// let PORT = 1234 || process.env.PORT;

// const MongoClient = require('mongodb').MongoClient;

// const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@claw85-l78sx.mongodb.net/test?retryWrites=true&w=majority`;

// const mongoDB = process.env.MONGODB_URI || uri;
// const client = new MongoClient(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// // console.log("\n >>>> DB Connected Successfully  <<<<<");

// client.connect(err => {

//   const collection = client.db("test").collection("devices");
//   client.close();
// });

// app.listen(PORT, () => { console.log('\n >>>> Server is up and running on port', PORT, ' <<<<<') });

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@claw85-l78sx.mongodb.net/test`;

// let dev_db_url = `mongodb+srv://mongoPossum:J6bvNKXjZ54S3s2@claw85-l78sx.mongodb.net/test`;

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', product);

let port = 1234;

app.listen(port, () => {
  console.log('Server is up and running on port  ' + port);
});