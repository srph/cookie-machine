var cookie = require('cookie');
var res = null;

/**
 * @todo throw error if init hasn't been called yet.
 */
exports = module.exports = {
  get: function(key) {
    var cookies = cookie.parse(res.headers['Set-Cookie']);
    return cookies[key];
  },

  set: function(key, value, opts) {
    var serialized = cookie.serialize(key, value, opts);
    res.setHeader('Set-Cookie', serialized);
    return serialized;
  },

  remove: function(key, opts) {
    opts = opts || {};
    opts.expires = new Date(0);
    var serialized = cookie.serialize(key, '', opts);
    res.setHeader('Set-Cookie', serialized);
  },

  init: function(_res) {
    res = _res;
  }
};