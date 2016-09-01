angular.module('coffeeShopApp', ['lbServices','ngRoute', 'ngFileUpload'])
	.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/templates/home.html',
		controller: 'CoffeeShopsCtrl'
	})
	.when('/account', {
		templateUrl: '/templates/account.html'
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
	})
	.controller('UploadController', function($scope, Upload) {
  
		var S3_BUCKET_URL = '/api/Containers/' + yourS3bucketName + '/upload';

		$scope.data = {	
			files: []
		};

		$scope.submit = function(data) {
		    var files = data.files[0];
		    
	    Upload.upload({
		    url: S3_BUCKET_URL,
		    file: file
		})
		.then(function(res) {
		    $log.debug(res.data.result.files); // log files uploaded
	    });
	};

});;
	