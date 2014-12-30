var Promise = require('./');

Promise.longStackTraces();

var coro2 = Promise.coroutine(function*() {
  yield 7;
});

var coro = Promise.coroutine(function*() {
  yield coro2();
});

coro();
