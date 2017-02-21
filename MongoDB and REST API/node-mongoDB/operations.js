var assert = require('assert');

exports.insertDocument = function(db,document, collection,callback) {
  // get documents collection
  var coll = db.collection(collection);
  // insert some documents
  coll.insert(document, function(err,result) {
      assert.equal(err,null);
      console.log("Inserted " + result.result.n + " documents into the document collection " + collection);
      callback(result);
  });
};

exports.findDocument = function(db, collection,callback) {
  // get documents collection
  var coll = db.collection(collection);
  // find some documents
  coll.find({}).toArray(function(err,docs) {
      assert.equal(err,null);
      callback(docs);
  });
};

exports.removeDocument = function(db,document, collection,callback) {
  // get documents collection
  var coll = db.collection(collection);
  // remove some documents
  coll.deleteOne(document, function(err,result) {
      assert.equal(err,null);
      console.log("Remove the document " + document);
      callback(result);
  });
};

exports.updateDocument = function(db,document,update, collection,callback) {
  // get documents collection
  var coll = db.collection(collection);
  // update document where a is 2, set b equal to 1
  coll.updateOne(document, {$set: update},null, function(err,result) {
      assert.equal(err,null);
      console.log("Update document with " + update);
      callback(result);
  });
};
