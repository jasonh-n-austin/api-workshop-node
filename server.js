var osprey = require('osprey');
var express = require('express');
var parser = require('raml-parser');
var app = express();

parser.loadFile(__dirname + '/api.raml')
  .then(function (raml) {
    app.use(osprey.createServer(raml, {
      documentationPath: '/documentation'
    }));

    app.listen(3000);
  });
