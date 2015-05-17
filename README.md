# myjekyll

MyJekyll is a [Jekyll](http://jekyllrb.com/) Markdown parser for [bouzuya](https://github.com/bouzuya/)

## Installation

    $ npm install https://github.com/bouzuya/myjekyll/archive/master.tar.gz

or

    $ npm install https://github.com/bouzuya/myjekyll/archive/{VERSION}.tar.gz

## Usage

```javascript
var jekyll = require('myjekyll');

var site = jekyll('./data/**/*.md', {}); // ./data/2015/2015-01-01-title.md

// All tags ['tag1', 'tag2']
console.log(site.tags());
// All tags and counts { tag1: 1, tag2: 1 }
console.log(site.tagCounts());
// All entries [{ file: '2015-01-01-title', title: 'hello', content: 'Hel ... }]
// properties:
//   file: filename (without extension)
//   content: raw markdown (without HTML compile)
//   <others>: meta data written by yaml
console.log(site.entries());
// Filtering by tags [...]
console.log(site.entries({ tags: ['tag1'] }));
```

```markdown
---
pubdate: "2015-01-01T23:59:59+09:00"
title: hello
tags: [tag1, tag2]
---
Hello, [bouzuya](http://github.com/bouzuya/).
```

# License

## 2.x

[MIT](LICENSE)

## <1.0.0

ISC
