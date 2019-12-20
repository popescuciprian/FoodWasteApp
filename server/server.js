const tables = require('./tables.js');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
tables.sync();
app.use(express.static(__dirname+'/public'));

app.listen(8080);