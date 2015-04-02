angular.module('huddleChatApp')

	.controller('chatRoomCtrl', ['$scope', '$timeout', 'firebaseReference','$firebaseArray' ,'$firebaseAuth','MessageService',
		function($scope, $timeout, firebaseReference, $firebaseArray, $firebaseAuth , MessageService){

		// references 
		var authRef =  $firebaseAuth(firebaseReference);
		var ref = firebaseReference;
		var getAuth = ref.getAuth();

		// open/close sidebar
		$scope.leftVisible = false;

		$scope.close = function() {
	        $scope.leftVisible = false;
   		};

	    $scope.showLeft = function(e) {
	        $scope.leftVisible = true;
	        e.stopPropagation();
	    };
	    
		// logged in local user
		$scope.user = {
			name: null
		}

		$scope.team = [];

		// adding name of local user to $scope
		firebaseReference.child('profiles').on('child_added', function(snapshot){
			if (getAuth && getAuth.uid === snapshot.key()) {
				var snapshot = snapshot.val();
				$scope.user = {
					name: snapshot.firstname
				}
				$scope.team.push(snapshot.firstname + " " + snapshot.lastname);
			}
		});

		// Rooms
    	var chatroomRef = firebaseReference.child('chatrooms');
    	$scope.rooms = $firebaseArray(chatroomRef);

		// push new room into firebase array and $scope
		function createFirebaseChatroom(newRoomName) {
	    	var chatroomRef = firebaseReference.child('chatrooms')
	    	var chatroomNameRef = chatroomRef.child(newRoomName);  
	    	chatroomRef.on('value', function(snap){
			return chatroomNameRef.set({
	    		newRoomName: newRoomName
    		})
	    	})     
    	}

    	var presenceRef = firebaseReference.child('presence');


    	// team
    	var amOnline = firebaseReference.child('profiles');
    	amOnline.on('value', function(snapshot){
    		if(snapshot.val()){

    		}
    	})

    	// lightbox to create new room
		$scope.createNewRoom = function(newRoomName) {
			$scope.rooms.push({'roomName': newRoomName})
			createFirebaseChatroom(newRoomName)
			$scope.lightbox = false;
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

		// log out user
		$scope.logout = function() {
			authRef.$unauth();
		}








		// chat room messages
		var chatRef = firebaseReference.child('chatroom').limitToLast(50);
		$scope.messages = $firebaseArray(chatRef);

    	// 'https://dazzling-inferno-7726.firebaseio.com/chatroom'
  		$scope.addMessage = function(event) {
  			if (event.keyCode === 13) {
  				var newMessage = {  					
	  				user: $scope.user.name,
				    datetime: Date.now(),
				    message: $scope.currentText
  				}
  				$scope.messages.$add(newMessage);
  				$scope.currentText = '';

	  		}
	  	}

		$scope.currentRoom = 'Marketing'

		$scope.currentRoomMembers = ['John Burns'];


	}])