angular.module('coffeeShopApp', ['lbServices','ngRoute','cloudinary',
  'photoAlbumControllers',
  'photoAlbumServices'])
	.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/templates/home.html',
		controller: 'CoffeeShopsCtrl'
	})
	.when('/account', {
		templateUrl: '/templates/account.html',
		controller: 'photoUploadCtrl'
	})
	.when('/login', {
		templateUrl: '/templates/login.html',
		controller: 'AuthLoginCtrl'
	})
	.when('/logout', {
		templateUrl: '/templates/home.html',
		controller: 'AuthLogoutCtrl'
	})
	.when('/signup', {
		templateUrl: '/templates/sign-up.html',
		controller: 'SignUpCtrl'
	})
	.otherwise({redirectTo: '/'});
	});
	