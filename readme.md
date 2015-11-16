## cookie-machine [![npm version](http://img.shields.io/npm/v/cookie-machine.svg?style=flat-square)](https://npmjs.org/package/cookie-machine?style=flat-square) [![Build Status](https://img.shields.io/travis/srph/cookie-machine.svg?style=flat-square)](https://travis-ci.org/srph/cookie-machine?branch=master)
A universal cookie library.

### Installing
```bash
npm i cookie-machine -S
```

Although tests are running on node `>=4.0` (because of jsdom), the library should support node `>=0.12`.

Currently, only CommonJS is supported. Please submit an issue if you'd like any other module to be supported. Although, browser builds have low chances of being supported because it doesn't maky any sense.

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

Check out more [examples](tree/master/examples).

### API
Here are some of the methods exposed by the library:

#### `init(object res): void`
- `res` - An object which is expected to be node's native `response`.

Initializes `cookie` to be ready for node. In the client, this is a `noop`.

#### `get(string key): any`
- `key` - The key of the cookie to be get.
Returns the value of the key in the cookie.

#### `set(string key, any value [, object options]): void`
- `key` - The key of the cookie to be stored.
- `value` - The value of the cookie to be stored.
- `options` - (`optional`, *defaults* to `{ expires: new Date(0) }`) Cookie options such as `expired`, `domain`, `path`, and etc.
Set a value in the cookie.

#### `remove(string key [, object options]): void`
- `key` - Key in the cookie to be removed.
- `options` - (`optional`, *defaults* to `{ expires: new Date(0) }`) Cookie options such as `expired`, `domain`, `path`, and etc.
Set a value in the cookie.