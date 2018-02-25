'use strict';

const express = require('express');
const app = express();

var users = ['John', 'Betty', 'Hal'];

app.get('/api/users', function (req, res) {
  res.json(users);
});

module.exports = app;
