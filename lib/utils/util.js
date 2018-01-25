let http = require('http');

let bk = Symbol('send data to client with fomatted')

http.ServerResponse.prototype[bk] = function(data, state = 1) {
  state = + state;
  return this.json({ state, data})
}


exports.bk = bk;