var fs = require('fs');
var parse = require('./parse');

module.exports = function(entries) {
  return entries.reduce(function(tags, entry) {
    if (!entry) return tags;
    if (!entry.tags) return tags;
    entry.tags.forEach(function(tag) {
      if (!tags[tag]) {
        tags[tag] = 0;
      }
      tags[tag] += 1;
    });
    return tags;
  }, {});
};
