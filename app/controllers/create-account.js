angular.module('huddleChatApp')

	.controller('createAccountCtrl', ['$scope', '$location', 'Auth', 'Profile', '$firebaseObject', function($scope, $location, Auth, Profile, $firebaseObject){

    $scope.registerAndCreateProfile = function() {

        Auth.$createUser({
				email: $scope.profile.email, 
				password: $scope.password
			}).then(function(authData){
				console.log("User created with uid: " + authData.uid);
				return createProfile(authData);
			}).catch(function(error){
				$scope.error = error;
			});
    }

    function createProfile(authData) {

    	var ref = new Firebase('https://dazzling-inferno-7726.firebaseio.com/profiles');
    	var profileRef = ref.child(authData.uid);       
    	return profileRef.set({
    		firstname: $scope.profile.firstname,
    		lastname: $scope.profile.lastname,
    		email: $scope.profile.email
    	})

    	// AngularFire version -- do not know how to use $save()
        // $scope.profile.$save().then(function() {
        //       console.log('Profile saved to Firebase!');
        //   }).catch(function(error) {
        //       alert('Error!');
        //   });
    }

	}])