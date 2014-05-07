var Promise = require('promise');
var co = require('./');
var assert = require('assert');

test('co promise returns a promise', function(done) {
  var promise = co(function* (){
    var woot = yield Promise.resolve(1);
    return woot;
  });

  assert.ok(promise.then);
  promise.
    then(function(value) {
      assert.equal(value, 1);
    }).
    then(done).
    catch(function(err) {
      done(new Error('threw an exception instead of resolving'));
    });
});

