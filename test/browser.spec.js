var expect = require('chai').expect;
var request = require('supertest');
var http = require('http');
var cookie = require('../lib/browser');

describe('server-side cookie', function() {
  describe('.set', function() {
    it('should work', function() {
      cookie.set('yolo', 'swag');
      expect(cookie.get('yolo')).to.equal('swag');
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