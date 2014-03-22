var expect = require('chai').expect;
var path = require('path');
var jekyll = require('../');

describe('index', function() {

  beforeEach(function() {
    this.postsDir = path.resolve(__dirname, './fixtures/');
    this.jekyll = jekyll({ dir: this.postsDir });
  });

  describe('tags', function() {
    it('works', function() {
      var tags = this.jekyll.tags;
      expect(tags).to.be.an('array');
    });
  });

  describe('entries', function() {
    it('works', function() {
      var entries = this.jekyll.entries;
      expect(entries).to.be.an('array');
    });
  });

  describe('_loadEntries', function() {
    it('works', function() {
      var entries = this.jekyll._loadEntries(this.postsDir);
      expect(entries).to.be.an('array');
      expect(entries[0]).to.have.property('meta');
      expect(entries[0]).to.have.property('content');
    });
  });

  describe('_loadEntry', function() {
    it('works', function() {
      var entry = this.jekyll._loadEntry('/home/bouzuya/bouzuya.github.com/_posts/2014-03-21-diary.markdown');
      expect(entry).to.have.property('meta');
      expect(entry).to.have.property('content');
    });
  });
});

