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
                    .otherwise({
                        redirectTo: '/'
                    });
          })