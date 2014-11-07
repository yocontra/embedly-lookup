# embedly-lookup [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Support us][gittip-image]][gittip-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]


## Information

<table>
<tr>
<td>Package</td>
<td>embedly-lookup</td>
</tr>
<tr>
<td>Description</td>
<td>Simply look up info about a URL on embed.ly</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.4</td>
</tr>
<tr>
<td>Browser Version</td>
<td>IE6+</td>
</tr>
</table>

## Usage

## Install

```
npm install embedly-lookup --save
```

## Example

```js
var lookup = require('embedly-lookup');
var key = 'your embedly api key';

// works on songs and videos or whatever, but here is a song as a sample
lookup('https://soundcloud.com/smallenginerepair/serve-yourself-1', key, function(err, song){
  /*
    song =
    {
      "provider_url":"http://soundcloud.com",
      "description":"'Serve Yourself' is the lead single from the debut album, 'Serve Yourself' by Small Engine Repair. The album will be released through iLabel records on the 27th Jan 2014. Pre-order now on iTunes.",
      "title":"Serve Yourself by Small Engine Repair",
      "author_name":"Small Engine Repair",
      "height":500,
      "thumbnail_width":500,
      "width":500,
      "author_url":"http://soundcloud.com/smallenginerepair",
      "version":"1.0",
      "provider_name":"SoundCloud",
      "thumbnail_url":"http://i1.sndcdn.com/artworks-000062914786-jz7eos-t500x500.jpg",
      "type":"rich",
      "thumbnail_height":500,
      "html":"removed, this is a long html iframe string for embedding"
    }
  */
});
```

## LICENSE

(MIT License)

Copyright (c) 2014 Fractal <contact@wearefractal.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.




[gittip-url]: https://www.gittip.com/WeAreFractal/
[gittip-image]: http://img.shields.io/gittip/WeAreFractal.svg

[downloads-image]: http://img.shields.io/npm/dm/embedly-lookup.svg
[npm-url]: https://npmjs.org/package/embedly-lookup
[npm-image]: http://img.shields.io/npm/v/embedly-lookup.svg

[travis-url]: https://travis-ci.org/wearefractal/embedly-lookup
[travis-image]: https://travis-ci.org/wearefractal/embedly-lookup.png?branch=master

[coveralls-url]: https://coveralls.io/r/wearefractal/embedly-lookup
[coveralls-image]: https://coveralls.io/repos/wearefractal/embedly-lookup/badge.png

[depstat-url]: https://david-dm.org/wearefractal/embedly-lookup
[depstat-image]: https://david-dm.org/wearefractal/embedly-lookup.png

[david-url]: https://david-dm.org/wearefractal/embedly-lookup
[david-image]: https://david-dm.org/wearefractal/embedly-lookup.png?theme=shields.io
