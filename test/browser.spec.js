var expect = require('chai').expect;
var request = require('supertest');
var http = require('http');
var cookie = require('../lib/browser');

describe('server-side cookie', function() {
  describe('.get', function() {
    it('should work', function() {
      expect(cookie.get('swag_swag_swag_')).to.be.undefined;
    });
  });

  describe('.set', function() {
    it('should work', function() {
      cookie.set('yolo', 'swag');
      expect(cookie.get('yolo')).to.equal('swag');
    });

    it('should return the serialized key-value', function() {
      expect(cookie.set('yolo', 'swag')).to.equal('yolo=swag');
    });
  });

  describe('.remove', function() {
    it('should work', function() {
      cookie.set('yolo', 'swag');
      expect(cookie.get('yolo')).to.equal('swag');

      cookie.remove('yolo');
      expect(cookie.get('yolo')).to.be.undefined;
    });
  });
});