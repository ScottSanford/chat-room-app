angular.module('huddleChatApp')

    .controller('MeetupBaseCtrl', ['$scope', '$firebase', 
        function($scope, $firebase){
          var fbRef = new Firebase('https://dazzling-inferno-7726.firebaseio.com/');
          $scope.questionsArray = $firebase(fbRef).$asArray();

          $scope.addQuestion = function(e) {
            if (e.keyCode === 13) {
              $scope.questionsArray.$add({user: $scope.name, question: $scope.body});
              $scope.body = '';
            }
          }
        }
    ]);