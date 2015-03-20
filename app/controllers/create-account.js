angular.module('huddleChatApp')

	.controller('createAccountCtrl', ['$scope', '$location', function($scope, $location){
		console.log('createAccountCtrl connected!');

		$scope.showForm = true;

		$scope.createAccount = function() {
			$location.url('/welcome');
		}
	}])