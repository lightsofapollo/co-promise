# co-promise

This does what you would expect and brings co a lot closer to what the
async function proposal for es7 does.

```js
var co = require('co-promise');

co(function* (err, value) {
}).
then(function() {
}).
catch(function() {
});

```

## Important Notes

Normal co is likely faster so using co-promise only where you need to
return a promise instead of a thunk (like to another api which expects a
promise). This is generally okay since co-promise is only needed for the
very top level generator the rest of the "yieldables" will use normal co
functionality and not be wrapped with an extra layer of promises.
