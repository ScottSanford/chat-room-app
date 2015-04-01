angular.module('huddleChatApp')


.factory('RegisteredUsersService', ['firebaseReference', function (firebaseReference) {
	var registeredUsersRef = firebaseReference.child('registeredUsers');
	return {

		// refactor to use AngularFire. Look at $watch
		addRegisteredUser: function addRegisteredUser(callback) {
			registeredUsersRef.on('child_added', function(snapshot){
				var val = snapshot.val();
				console.log(snapshot);
				callback.call(this, {
					firstname: val.firstName,
				    lastname: val.lastName,
				    email: val.email
				});
			})
		}
	}
}]);
