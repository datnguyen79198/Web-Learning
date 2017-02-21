var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var dboper = require('./operations');

// connection URL
var url = 'mongodb://localhost:27017/conFusion';
//use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(err, null);
    console.log("Connected correctly to server");

    dboper.insertDocument(db, {
        name: "Vadonut",
        description: "Test"
    }, "dishes", function(result) {
        console.log(result.ops);

        dboper.findDocument(db, "dishes", function(docs) {
            console.log(docs);

            dboper.updateDocument(db, {
                name: "Vadonut"
            }, {
                description: "Updated Test"
            }, "dishes", function(result) {
                console.log(result.result);

                dboper.findDocument(db, "dishes", function(docs) {
                    console.log(docs);
                    db.dropCollection("dishes", function(err, result) {
                        assert.equal(err, null);
                        db.close();
                    });
                });
            });
        });
    });
});
