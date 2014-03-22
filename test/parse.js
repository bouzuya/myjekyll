var expect = require('chai').expect;

describe('parse', function() {
  it('works', function() {
    var s = '';
    s += '---\n';
    s += 'layout: post\n';
    s += 'pubdate: "2014-01-23T01:23:45+09:00"\n';
    s += 'title: title string\n';
    s += 'tags: [javascript, hubot]\n';
    s += 'minutes: 32\n';
    s += 'pagetype: posts\n';
    s += '---\n';
    s += '[bouzuya/bouzuya.github.com](https://github.com/bouzuya/bouzuya.github.com)';
    var parse = require('../lib/parse');
    var result = parse(s);
    expect(result).to.have.property('layout', 'post');
    expect(result).to.have.property('pubdate', '2014-01-23T01:23:45+09:00');
    expect(result).to.have.property('title', 'title string');
    expect(result).to.have.property('tags');
    expect(result.tags).to.have.deep.equal(['javascript', 'hubot']);
    expect(result).to.have.property('minutes', 32);
    expect(result).to.have.property('pagetype', 'posts');
    expect(result).to.have.property('content');
  });
});

