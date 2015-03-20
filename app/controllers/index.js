angular.module('huddleChatApp')

	.controller('indexCtrl', ['$scope', '$location', function($scope, $location){
		console.log('createAccountCtrl connected!');

		// $scope.showImage = $location.path() === '/' || $location.path() === '/create-account';

	}])