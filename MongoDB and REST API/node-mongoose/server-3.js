var mongoose = require('mongoose'),
    assert = require('assert');

var Dishes = require('./models/dishes-3');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function() {
    console.log("Connected correctly to server");

    Dishes.create({
        name : 'Uthapizza_new',
        description : 'Test',
        comments : [
          {
            rating : 2,
            comment : 'This is fuking bad!!!',
            author : 'Thaliah'
          }
        ]
    }, function(err, dish) {
        if (err) throw err;

        console.log('Dish created!');
        console.log(dish);
        var id = dish._id;

        setTimeout(function() {
          Dishes.findByIdAndUpdate(id, {
              $set: {
                  description: 'Updated Test'
              }
          }, {
              new : true
          })
          .exec(function(err,dish) {
              if (err) throw err;
              console.log('Updated Dish!!!');
              console.log(dish);

              dish.comments.push({
                  rating : 5,
                  comment: 'I\'m sorry, Thaliah is fuking noob',
                  author : 'Dahliah'
              });
              dish.save(function(err, dish) {
                console.log('Updated Comments!!!');
                console.log(dish);

                db.collection('dishes').drop(function(){
                    db.close();
                });
              })

          });
        }, 3000);
    });
});
