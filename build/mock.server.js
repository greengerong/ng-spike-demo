const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


app.use(function (req, res, next) {
  console.log("Request '" + req.url + "' coming!");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/greeting', function (req, res) {
  res.send({desc: 'rebirth demo'});
});

app.get('/no-content', function (req, res) {
  res.status(204).send();
});

app.listen(3000);
