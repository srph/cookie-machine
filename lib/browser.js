var cookie = require('cookie');

exports = module.exports = {
  set: function (key, value, options) {
    return document.cookie = cookie.serialize(key, value, options);
  },

  get: function (key) {
    return cookie.parse(document.cookie)[key];
  },

  remove: function (key, opts) {
    opts = opts || {};
    opts.expires = new Date(0);

    return !!(document.cookie = cookie.serialize(key, '', opts));
  },

  /**
   * no-op for client
   *
   * @todo
   * throw warning instead of silently doing nothing
   */
  init: function() { }
};