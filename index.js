var co = require('co');
var Promise = this.Promise || require('' + 'promise');

function coPromise(continuable) {
  return new Promise(function(accept, reject) {
    co(continuable)(function(err, value) {
      if (err) return reject(err);
      accept(value);
    });
  });
};

module.exports = coPromise;
