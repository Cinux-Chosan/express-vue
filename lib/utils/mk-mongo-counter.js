const mongo = require('./mongo'),
  assert = require('assert');

let mymongo = new mongo('posts');
mymongo.getDB().then(db => {
  let col = db.collection('counter');
  col.findOne({}, null, (err, r) => {
  assert.equal(null, err);
  if (!r) {
      col.insertOne({counter: 1}, null, (err, r) => {
        assert.equal(null, err);
        assert.equal(1, r.insertedCount);
        console.log('database counter created, first document inserted\n');
      });
    }
  })
})
