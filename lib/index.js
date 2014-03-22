var fs = require('fs');
var path = require('path');
var parse = require('./parse');
var tags = require('./tags');

var MyJekyll = function(options) {
  this._entries = this._loadEntries(options.dir);
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

MyJekyll.prototype._loadEntries = function(dir) {
  var files = fs.readdirSync(dir);
  return files.map(function(file) {
    return this._loadEntry(path.resolve(dir, file));
  }.bind(this));
};

MyJekyll.prototype._loadEntry = function(path) {
  var data = fs.readFileSync(path, { encoding: 'UTF-8' });
  return parse(data);
};

module.exports = function(options) {
  return new MyJekyll(options);
};
