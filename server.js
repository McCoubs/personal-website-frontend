const express = require('express');
const app = express();
const path = require('path');

// Serve only the static files form the dist directory
app.use(express.static('./dist/frontend'));

// redirect all requests to https
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
};
// Instruct the app to use the forceSSL middleware
app.use(forceSSL());

// For all GET requests, send back index.html so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
});

app.listen(process.env.PORT || 8080);
