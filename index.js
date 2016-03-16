require('babel-register')({
  presets: ['es2015', 'react']
});
var server = require('./server').default;

const port = 7001;
server.listen(port, 'localhost', function (err, result) {
  if (err) console.log(err);

  console.log('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});