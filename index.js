'use strict';

var request = require('superagent');

function embedly(url, key, cb){
  request.get('https://api.embed.ly/1/oembed')
    .query({
      better: true,
      key: key,
      url: url
    })
    .accept('json')
    .end(function(err, res){
      if (err) {
        return cb(err);
      }

      if (res.status >= 400) {
        return cb(new Error(res.text));
      }

      cb(null, res.body);
    });
}

module.exports = embedly;