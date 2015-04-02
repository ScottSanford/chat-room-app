angular.module('huddleChatApp')

	.directive('sidebarMenu', function(){
		return {
			retrict: 'E', 
			templateUrl: 'partials/sidebar-menu.html', 
			controller: 'chatRoomCtrl'
		}
	})