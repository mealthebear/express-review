// Express here
const express = require('express');
// body parser reads it as request object
const bodyParser = require('body-parser');
// lets us know what kind of request we are serving
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

// Creates server (can be called anything like app)
const server = express();
const port = 3000;

// console.logs request to server
server.use(morgan('dev'));
// parses request and response bodies (w/out it, we only get buffers)
server.use(bodyParser.json());

// Serves something and listens to any request that comes from index.html
server.use('/', express.static(path.join(__dirname + '/../client/dist')));

server.use('/api', router);

server.listen(port, () => console.log(`Connected to port ${port}`));