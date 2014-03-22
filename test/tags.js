var expect = require('chai').expect;

describe('tags', function() {
  describe('single entry', function() {
    it('works', function() {
      var tags = require('../lib/tags');
      var entries = [
        { meta: { tags: ['a', 'b'] } },
      ];
      expect(tags(entries)).to.deep.equal(['a', 'b']);
    });
  });

  describe('multiple entries (& empty tags)', function() {
    it('works', function() {
      var tags = require('../lib/tags');
      var entries = [
        { meta: { tags: ['a', 'b'] } },
        { meta: { tags: [] } },
        { meta: {} },
        { meta: { tags: ['a', 'c'] } }
      ];
      expect(tags(entries)).to.deep.equal(['a', 'b', 'c']);
    });
  });

});
