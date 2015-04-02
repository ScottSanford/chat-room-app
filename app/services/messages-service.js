angular.module('huddleChatApp')


.factory('MessageService', ['$firebaseArray','firebaseReference', function ($firebaseArray, firebaseReference) {
	var messageRef = firebaseReference.child('chatroom');
	return function() {
      // create a reference to the Firebase where we will store our data
      var messageRef = firebaseReference.child('chatroom');
        
      // this uses AngularFire to create the synchronized array
      return $firebaseArray(messageRef);

	}
}]);
