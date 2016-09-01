module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('CoffeeShop', function(err) {
    if (err) throw err;
 
    app.models.CoffeeShop.create([
      {name: 'Bel Cafe', city: 'Vancouver', imgUrl: '/img/belcaffe.jpg'},
      {name: 'Three Bees Coffee House', city: 'San Mateo', imgUrl: '/img/threebeescoffeehouse.jpg'},
      {name: 'Caffe Artigiano', city: 'Vancouver', imgUrl: '/img/caffeartigiano.jpg'},
    ], function(err, coffeeShops) {
      if (err) throw err;
 
      console.log('Models created: \n', coffeeShops);
    });
  });
  var User = app.models.User;
  User.create({email: 'foo@bar.com', password: 'bar', avatarUrl: '/img/default_avatar.png'}, function(err, user) {
    console.log(user);
  });
};