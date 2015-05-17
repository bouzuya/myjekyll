var fs = require('fs');
var path = require('path');
var glob = require('glob');
var parse = require('./parse');
var tags = require('./tags');

var MyJekyll = function(pattern, options) {
  this._entries = this._loadEntries(pattern, options);
  this._tags = tags(this._entries);
};

MyJekyll.prototype.tags = function() {
  return Object.keys(this._tags);
};

MyJekyll.prototype.tagCounts = function() {
  return this._tags;
};

MyJekyll.prototype.entries = function(options) {
  var entries = this._entries;
  if (options && options.tags) {
    entries = entries.filter(function(entry) {
      return options.tags.every(function(tag) {
        return entry.tags.indexOf(tag) >= 0;
      });
    });
  }
  return entries;
};

MyJekyll.prototype._loadEntries = function(pattern, options) {
  var files = glob.sync(pattern, options);
  return files.map(function(file) {
    return this._loadEntry(file);
  }, this);
};

MyJekyll.prototype._loadEntry = function(filePath) {
  var data = fs.readFileSync(filePath, { encoding: 'UTF-8' });
  var parsed = parse(data);
  parsed.file = path.basename(filePath, path.extname(filePath));
  return parsed;
};

module.exports = function(options) {
  return new MyJekyll(options);
};
