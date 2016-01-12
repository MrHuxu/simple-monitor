var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index')
});

var server = app.listen(3000, function () {
  console.log('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', server.address().port, server.address().port);
});