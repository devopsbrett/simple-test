'use strict';

// const awsServerlessExpress = require('aws-serverless-express');
const server = require('./server');
// var server = require('./server');
const port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server running on port %d', port);
});
