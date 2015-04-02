angular.module("huddleChatApp", [
        'firebase',
        'ngRoute', 
        'ngAnimate', 
        'ngMessages',
        'luegg.directives'
        ])

        .constant('FIREBASE_URL', 'https://dazzling-inferno-7726.firebaseio.com/')

        .factory('firebaseReference', function(FIREBASE_URL){
            return new Firebase(FIREBASE_URL);
        })
        
        .factory('Auth', ["$firebaseAuth", 'firebaseReference', function($firebaseAuth, firebaseReference) {
            return $firebaseAuth(firebaseReference);
        }])

        .factory('ProfilesRef', ['firebaseReference', function(firebaseReference){
            return firebaseReference.child('profiles');
        }])

        .config(function ($routeProvider) {
                  $routeProvider
                    .when('/', {
                        templateUrl: 'partials/login.html', 
                        controller: 'loginCtrl'
                    })
                    .when('/create-account', {
                        templateUrl: 'partials/create-account.html',
                        controller: 'createAccountCtrl'
                    })
                    .when('/create-profile', {
                        templateUrl: 'partials/create-profile.html',
                        controller: 'createProfileCtrl'
                    })
                    .when('/welcome', {
                        templateUrl: 'partials/welcome.html',
                        controller: 'welcomeCtrl'
                    })
                    .when('/chat-room', {
                        templateUrl: 'partials/chat-room.html',
                        controller: 'chatRoomCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
          })
        