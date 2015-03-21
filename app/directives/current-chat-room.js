angular.module('huddleChatApp')

	.directive('currentChatRoom', function(){
		return {
			retrict: 'E', 
			templateUrl: 'partials/current-chat-room.html', 
			controller: 'chatRoomCtrl'
		}
	})