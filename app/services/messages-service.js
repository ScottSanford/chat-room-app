angular.module('huddleChatApp')


.factory('MessageService', ['$firebaseArray','firebaseReference', function ($firebaseArray, firebaseReference) {
	var messageRef = firebaseReference.child('chatroom');
	var fireMessage = $firebaseArray(messageRef);
	return {

		// refactor to use AngularFire. Look at $watch
		childAdded: function childAdded(limitNumber, callback) {
			messageRef.limitToLast(limitNumber).on('child_added', function(snapshot){
				var val = snapshot.val();
				console.log(snapshot);
				callback.call(this, {
					user: val.user,
				    datetime: Date.now(),
				    message: val.message,
				    key: snapshot.key()
				});
			})
		}, 
		add: function add(message) {
			return fireMessage.$add(message);
		}

	}
}]);
