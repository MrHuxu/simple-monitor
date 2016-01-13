require('babel-core/register');
var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);

var initSocket = require('./lib/socket');
initSocket(http);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// resource files setup
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index')
});

var port = 7001;
http.listen(port, () => {
	console.log('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
