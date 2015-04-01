angular.module('huddleChatApp')

	.directive('createAccountForm', function(){
		return {
			retrict: 'E', 
			templateUrl: 'partials/create-account-form.html', 
			controller: 'createAccountCtrl'
		}
	})