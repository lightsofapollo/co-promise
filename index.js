var co = require('co');
var Promise = require('promise');

module.exports = function coPromise(continuable) {
  return new Promise(function(accept, reject) {
    co(continuable)(function(err, value) {
      if (err) return reject(err);
      accept(value);
    });
  });
};
