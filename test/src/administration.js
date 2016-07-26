import test from 'ava';

var OpenDKIM = require('../../');

test('new OpenDKIM is an empty object', t => {
  try {
    var opendkim = new OpenDKIM();
    t.deepEqual(opendkim, {});
  } catch (err) {
    t.fail(err.message);
  }
});

// TODO(godsflaw): make a more complete test where there is a cache to set
test('test flush_cache with no active cache', t => {
  try {
    var opendkim = new OpenDKIM();
    t.is(opendkim.flush_cache(), -1);
  } catch (err) {
    t.fail(err.message);
  }
});
