angular.module('huddleChatApp')


.factory('Rooms', ['$scope', 'firebaseReference', function ($scope, firebaseReference) {
	    // Might use a resource here that returns a JSON array
	    var rootRef = firebaseReference;
	    console.log("Root Ref :: " + rootRef);

	    return {
	    	createNewRoom: function() {
	    		rootRef.child('chatroom').set({
	    			name: $scope.newRoomName
	    		});
	    	}

	    }
	}]);
