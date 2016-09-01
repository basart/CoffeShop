angular
	.module('coffeeShopApp')
	.controller('AuthLoginCtrl', ['$scope', '$rootScope','User', '$location', 
		function($scope, $rootScope, User, $location) {
			$scope.user = {
				email: 'foo@bar.com',
				password: 'bar'
			}
			$scope.login = function() {
		    	User
		    	.login({
		    		email: $scope.user.email, 
		    		password: $scope.user.password
		    	})
		    	.$promise
		    	.then(function(res) {
					$rootScope.currentUser = {
						id: res.user.id,
						tokenId: res.id,
						email: res.user.email,
						avatarUrl: res.user.avatarUrl
					};
					console.log(res.user.avatarUrl);
					$location.path('/');
				}, function(err, res) {
					$scope.error = 'user not found';
					$location.path('/login');
				});
  
			};
   	}])
   	.controller('AuthLogoutCtrl', ['$scope', '$rootScope','User', '$location', 
		function($scope, $rootScope, User, $location){
				console.log('logout');
				User
				.logout()
				.$promise
				.then(function() {
					$rootScope.currentUser = null;
					$location.path('/');
				});
		}
	])
	.controller('SignUpCtrl', ['$scope', 'User', '$location', 
		function($scope, User, $location) {
			$scope.register = function() {
				User
				.create({
			    		email: $scope.user.email, 
			    		password: $scope.user.password,
			    		avatarUrl: '/img/default_avatar.png'
			    	})
				.$promise
				.then(function() {
					$location.path('login');
				}, function(err, res) {
					$scope.error = err.status;
					$location.path('/signup');
				});
			};
		}]);


