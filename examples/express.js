var cookie = require('../');
var express = require('express');
var app = express();

app.use(function(req, res, next) {
  cookie.init(res);
  cookie.set('swaggity', 'swag');
  res.send('<script>document.write(document.cookie);</script>')
});

app.listen(3000, function() {
  console.log('Servet listening to port 3000');
});