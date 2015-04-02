angular.module('huddleChatApp')

	.controller('loginCtrl', ['$scope', '$location', 'Auth', 'firebaseReference', function($scope, $location, Auth, firebaseReference){
		
			firebaseReference.child('profiles/').on('child_added', function(snapshot){
				return snapshot.key();
			})			

		$scope.login = function() {

			var promise = Auth.$authWithPassword({
				email: $scope.email,
				password: $scope.password
			});

			promise.then(function(user){
				firebaseReference.child('profiles/').on('child_added', function(snapshot){
					if (user.uid === snapshot.key()) {
						$location.url('/chat-room');
					}
				})		
			}, function(error){
				console.log(error);
			})
		}

	}])