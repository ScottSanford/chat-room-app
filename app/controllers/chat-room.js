angular.module('huddleChatApp')

	.controller('chatRoomCtrl', ['$scope', '$timeout', 'firebaseReference', 'MessageService', function($scope, $timeout, firebaseReference, MessageService){

		$scope.text = null;
		$scope.messages = [];

		MessageService.childAdded(1, function(addedChild){
				$scope.messages.push(addedChild);
		})

    	// 'https://dazzling-inferno-7726.firebaseio.com/chatroom'
  		$scope.addMessage = function(event) {
  			if (event.keyCode === 13) {
  				var newMessage = {  					
	  				user: $scope.user.name,
				    datetime: Date.now(),
				    message: $scope.currentText
  				}
  				$scope.currentText = '';
				var promise = MessageService.add(newMessage);
				promise.then(function(data){
					console.log(data.key());
				});
	  		}
	  	}

		$scope.closeSideBar = function() {
			$scope.closeAnimation = 'close-sidebar-menu-animation';	
		}

		$scope.openLightBox = function() {
			$scope.lightbox = true;
		};

		$scope.closeLightBox = function() {
			$scope.lightbox = false;
		}

		$scope.user = {
			name: 'Scott Sanford'
		}

		$scope.team = ['John Burns', 'Dana Stemo', 'Mea Andrews', 'Dustin Zweck', 'Scott Sanford', 'Christy Wiggers'];

		$scope.currentRoom = 'Marketing'

		$scope.currentRoomMembers = ['John Burns', 'Dana Stemo', 'Mea Andrews', 'Scott Sanford'];

	}])