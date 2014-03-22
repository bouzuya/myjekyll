var expect = require('chai').expect;

describe('tags', function() {
  describe('single entry', function() {
    it('works', function() {
      var tags = require('../lib/tags');
      var entries = [
        { tags: ['a', 'b'] },
      ];
      expect(tags(entries)).to.deep.equal({ a: 1, b: 1 });
    });
  });

  describe('multi entries (& empty tags)', function() {
    it('works', function() {
      var tags = require('../lib/tags');
      var entries = [
        { tags: ['a', 'b'] },
        { tags: [] },
        {},
        { tags: ['a', 'c'] }
      ];
      expect(tags(entries)).to.deep.equal({ a: 2, b: 1, c: 1 });
    });
  });

});
