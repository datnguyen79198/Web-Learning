var mongoose = require('mongoose'),
    assert = require('assert');

var Dishes = require('./models/dishes-3');
var Promotions = require('./models/promotions');
var Leaders = require('./models/leaders');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function() {
    console.log("Connected correctly to server");

    Dishes.create({
      name: 'Uthapizza',
      image: 'images/Uthapizza_new.png',
      category: 'mains',
      label: 'HOT',
      price: '$4.99',
      description: 'Test',
      comments: [{
          rating: 2,
          comment: 'This is fuking bad!!!',
          author: 'Thaliah'
      }]
    }, function(err, dish) {
        if (err) throw err;

        console.log('Dish created!');
        console.log(dish);

        db.collection('dishes').drop(function(){
            db.close();
        });
    });

    Promotions.create({
      name: 'Weekend Grand Buffet',
      image: 'images/buffet.png',
      label: 'NEW',
      price: '$19.99',
      description: 'Featuring...',
    }, function(err, promotion) {
        if (err) throw err;

        console.log('Promotion created!');
        console.log(promotion);

        db.collection('promotions').drop(function(){
            db.close();
        });
    });

    Leaders.create({
      name: 'Peter Pan',
      image: 'images/alberto.png',
      designation: 'Chief Blah Blah...',
      abbr: 'CEO',
      description: 'Our CEO, Thaliah...',
    }, function(err, leader) {
        if (err) throw err;

        console.log('Leader created!');
        console.log(leader);

        db.collection('leaders').drop(function(){
            db.close();
        });
    });

});
