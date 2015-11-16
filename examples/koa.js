var cookie = require('../');
var koa = require('koa')
var app = koa();

app.use(function* () {
  cookie.init(this.res);
  cookie.set('yolowing', 'swag');
  this.body = '<script>document.write(document.cookie)</script>';
});

app.listen(8080, function() {
  console.log('Server listening to port 8080');
});