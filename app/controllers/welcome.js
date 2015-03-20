angular.module('huddleChatApp')

	.controller('welcomeCtrl', ['$scope', function($scope){
		console.log('welcome connected');

		$scope.viewClass = 'welcome';

		$scope.message = "Get started by clicking the double arrow in the top right";

	}])