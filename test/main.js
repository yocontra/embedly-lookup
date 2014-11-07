'use strict';

var should = require('should');
var lookup = require('../');

require('mocha');

var key = '3ee528c9eb4b4908b268ce1ace120c92';

describe('embedly-lookup', function() {
  it('should look up a url', function(done) {
    var url = 'https://soundcloud.com/smallenginerepair/serve-yourself-1';
    lookup(url, key, function(err, res){
      should.not.exist(err);
      should.exist(res);
      res.provider_url.should.equal('http://soundcloud.com');
      res.description.should.equal('\'Serve Yourself\' is the lead single from the debut album, \'Serve Yourself\' by Small Engine Repair. The album will be released through iLabel records on the 27th Jan 2014. Pre-order now on iTunes.');
      res.title.should.equal('Serve Yourself by Small Engine Repair');
      res.author_name.should.equal('Small Engine Repair');
      res.author_url.should.equal('http://soundcloud.com/smallenginerepair');
      res.version.should.equal('1.0');
      res.provider_name.should.equal('SoundCloud');
      done();
    });
  });

  it('should fail on a stinker url', function(done) {
    var url = 'http://lkjhlkjh';
    lookup(url, key, function(err, res){
      should.exist(err);
      should.not.exist(res);
      done();
    });
  });

  it('should fail on invalid api key', function(done) {
    var url = 'https://soundcloud.com/smallenginerepair/serve-yourself-1';
    lookup(url, '123', function(err, res){
      should.exist(err);
      should.not.exist(res);
      done();
    });
  });
});
