const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route');
require('dotenv').config();
const app = express();

app.use('/products', product);

let PORT = 1234;

app.listen(PORT, () => { console.log('\n >>>> Server is up and running on port', PORT, ' <<<<<') });

// `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@claw85-l78sx.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(
  `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@claw85-l78sx.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true
  }
);

