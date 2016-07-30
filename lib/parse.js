var parse = require('jekyll-markdown-parser').parse;

module.exports = function(jekyllMarkdown) {
  var parsed = parse(jekyllMarkdown);
  var entry = parsed.parsedYaml;
  entry.content = parsed.markdown;
  return entry;
};
