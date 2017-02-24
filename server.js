
var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path');
var bodyParser = require('body-parser');
var port = 8080;

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

console.log('server running at: http://localhost:' + port);
server.listen(port);