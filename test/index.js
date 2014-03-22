var expect = require('chai').expect;
var path = require('path');
var jekyll = require('../');

describe('index', function() {

  beforeEach(function() {
    this.postsDir = path.resolve(__dirname, './fixtures/');
    this.post = path.resolve(this.postsDir, './2014-01-01-diary.markdown');
    this.jekyll = jekyll({ dir: this.postsDir });
  });

  describe('tags', function() {
    it('works', function() {
      var tags = this.jekyll.tags;
      expect(tags).to.be.an('array');
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
      var entries = this.jekyll._loadEntries(this.postsDir);
      expect(entries).to.be.an('array');
      expect(entries[0]).to.have.property('meta');
      expect(entries[0]).to.have.property('content');
    });
  });

  describe('_loadEntry', function() {
    it('works', function() {
      var entry = this.jekyll._loadEntry(this.post);
      expect(entry).to.have.property('meta');
      expect(entry).to.have.property('content');
    });
  });
});

