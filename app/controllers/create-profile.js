angular.module('huddleChatApp')

    .controller('createProfileCtrl', ['$scope', '$location', 'Profile', function($scope, $location, Profile){

      // download physicsmarie's profile data into a local object
      // all server changes are applied in realtime
    $scope.profile = Profile('scottsanford')
        
      $scope.createProfile = function() {
        $scope.profile.$save().then(function() {
              console.log('Profile saved to Firebase!');
          }).catch(function(error) {
              alert('Error!');
          });
      }

    }]);