var fs = require('fs');
var parse = require('./parse');

module.exports = function(entries) {
  return Object.keys(entries.reduce(function(tags, entry) {
    if (!entry.meta) return tags;
    if (!entry.meta.tags) return tags;
    entry.meta.tags.forEach(function(tag) {
      tags[tag] = true; // dummy value
    });
    return tags;
  }, {}));
};
