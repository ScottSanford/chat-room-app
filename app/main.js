angular.module("huddleChatApp", [
        'firebase',
        'ngRoute', 
        'ngAnimate'
        ])

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