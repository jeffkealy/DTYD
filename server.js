var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));

app.listen('3000');
console.log('working on', PORT);
