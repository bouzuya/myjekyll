var expect = require('chai').expect;
var path = require('path');
var jekyll = require('../');

describe('index', function() {

  beforeEach(function() {
    this.jekyll = jekyll('./test/fixtures/*.markdown', {});
  });

  describe('tags', function() {
    it('works', function() {
      var tags = this.jekyll.tags();
      expect(tags).to.be.an('array');
    });
  });

  describe('tagCounts', function() {
    it('works', function() {
      var tags = this.jekyll.tagCounts();
      expect(tags).to.have.property('tag1', 2);
      expect(tags).to.have.property('tag2', 1);
      expect(tags).to.have.property('tag3', 1);
    });
  });

  describe('entries', function() {
    describe('no option', function() {
      it('works', function() {
        var entries = this.jekyll.entries();
        expect(entries).to.be.an('array');
        expect(entries).to.have.length(2);
      });
    });

    describe('tags option', function() {
      describe('tag1', function() {
        it('works', function() {
          var entries = this.jekyll.entries({ tags: ['tag1'] });
          expect(entries).to.be.an('array');
          expect(entries).to.have.length(2);
        });
      });

      describe('tag2', function() {
        it('works', function() {
          var entries = this.jekyll.entries({ tags: ['tag3'] });
          expect(entries).to.be.an('array');
          expect(entries).to.have.length(1);
        });
      });

      describe('tag1 & tag2', function() {
        it('works', function() {
          var entries = this.jekyll.entries({ tags: ['tag1', 'tag2'] });
          expect(entries).to.be.an('array');
          expect(entries).to.have.length(1);
        });
      });

    });
  });

  describe('_loadEntries', function() {
    it('works', function() {
      var entries = this.jekyll._loadEntries('./test/fixtures/*.markdown', {});
      expect(entries).to.be.an('array');
      expect(entries[0]).to.have.property('title');
      expect(entries[0]).to.have.property('content');
    });
  });

  describe('_loadEntry', function() {
    it('works', function() {
      var mdpath = './test/fixtures/2014-01-01-diary.markdown';
      var entry = this.jekyll._loadEntry(mdpath);
      expect(entry).to.have.property('title');
      expect(entry).to.have.property('content');
    });
  });
});
