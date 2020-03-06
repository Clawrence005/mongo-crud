const express = require('express');
const bodyParser = require('body-parser');

//initialize app
const app = express();

let PORT = 1234;

app.listen(PORT, () => { console.log('\n >>>> Server is up and running on port', PORT, ' <<<<<') });