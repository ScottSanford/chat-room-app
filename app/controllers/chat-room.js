angular.module('huddleChatApp')

	.controller('chatRoomCtrl', ['$scope', function($scope){
		console.log('chatroom connected!');

		$scope.user = {
			name: 'Scott Sanford'
		}

		$scope.rooms = ['Sales', 'Marketing', 'Internal'];

		$scope.team = ['John Burns', 'Dana Stemo', 'Mea Andrews', 'Dustin Zweck', 'Scott Sanford', 'Christy Wiggers'];

		$scope.currentRoom = 'Marketing'

		$scope.currentRoomMembers = ['John Burns', 'Dana Stemo', 'Mea Andrews', 'Scott Sanford'];

	}])