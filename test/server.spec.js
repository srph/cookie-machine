var expect = require('chai').expect;
var request = require('supertest');
var http = require('http');
var cookie = require('../');

describe('server-side cookie', function() {
  describe('.set', function() {
    it('should work', function(done) {
      var server = http.createServer(function(req, res) {
        cookie.init(res);
        cookie.set('yolo', 'swag');
        res.end();
      });

      request(server)
        .get('/')
        .expect('Set-Cookie', /yolo=swag/, done);
    });

    it('should return the serialized key-value', function(done) {
      var server = http.createServer(function(req, res) {
        cookie.init(res);
        expect(cookie.set('yolo', 'swag')).to.equal('yolo=swag');
        res.end();
      });

      request(server)
        .get('/')
        .end(done);
    });
  });

  describe('.remove', function() {
    it('should work', function(done) {
      var server = http.createServer(function(req, res) {
        cookie.init(res);
        cookie.set('yolo', 'swag');
        cookie.remove('yolo');
        res.end();
      });

      request(server)
        .get('/')
        .expect('Set-Cookie', /yolo=;/, done);
    });
  });
});