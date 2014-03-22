var yaml = require('js-yaml');

module.exports = function(jekyllMarkdown) {
  var re = new RegExp('^---\s*$\n', 'm');
  var parsed = jekyllMarkdown.split(re);
  var yamlString = parsed[1];
  var markdownString = parsed[2];
  return { meta: yaml.safeLoad(yamlString), content: markdownString };
};
