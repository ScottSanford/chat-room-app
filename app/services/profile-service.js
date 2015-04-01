angular.module('huddleChatApp').factory("Profile", ["$firebaseObject", 'firebaseReference', function($firebaseObject, firebaseReference) {
    return function(user) {
      // create a reference to the Firebase where we will store our data
      var ref = firebaseReference.child("profiles");
      var profileRef = ref.child(user);

      // return it as a synchronized object
      return $firebaseObject(profileRef);
    }
  }
]);