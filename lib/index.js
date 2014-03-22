var fs = require('fs');
var path = require('path');
var parse = require('./parse');
var tags = require('./tags');

var MyJekyll = function(options) {
  this.entries = this._loadEntries(options.dir);
  this.tags = tags(this.entries);
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
