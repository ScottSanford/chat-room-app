angular.module('huddleChatApp')

	.controller('loginCtrl', ['$scope', '$location', 'Auth', 'firebaseReference', function($scope, $location, Auth, firebaseReference){

		$scope.login = function() {

			var promise = Auth.$authWithPassword({
				email: $scope.email,
				password: $scope.password
			});

			promise.then(function(user){
				console.log(user);
				$location.url('/chat-room');
			}, function(error){
				console.log(error);
			})
		}

	}])