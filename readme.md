## cookie-machine
A universal cookie library.

### Installing
```bash
npm i cookie-machine -S
```

Although tests are running on `>=4.0` (because os jsdom), the library should support node.js `>=0.12`.

Currently, only CommonJS is supported. Please submit an issue if you'd like any other module to be supported. Although, browsers have low chances of being supported.

### Usage
```js
// server-side / node
var cookie = require('cookie-machine');

http.createServer(function(req, res) {
  cookie.init(res);
  cookie.set('yolo', 'swag');
});

// browser
var cookie = require('cookie-machine');
// notice that we no longer have to call `init` here.
// init is only required for the server-side.
cookie.set('yolo', 'swag');
```