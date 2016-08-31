angular.module('coffeeShopApp').controller('CoffeeShopsCtrl', function($scope, CoffeeShop){
	$scope.coffeeShops = {name: 'blabla', city: 'afsdfasdf', imgUrl: ''};
	CoffeeShop
	.find()
	.$promise
	.then(function(coffeeShops) {
		$scope.coffeeShops = coffeeShops;
		$scope.selectedShop = $scope.selectedShop || coffeeShops[0];
	});
});