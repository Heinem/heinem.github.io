var teamApp = angular.module('TeamApp', ['ngRoute']);

teamApp.config(['$routeProvider','$httpProvider',
  function ($routeProvider, $httpProvider) {
      $routeProvider.
        when('/intro', {
            templateUrl: 'Content/AngularJS/View/intro.html',
            controller: 'introController'
        })
          .when('/bike', {
              templateUrl: 'Content/AngularJS/View/bike.html',
              controller: 'bikeController'
          })
          .when('/run', {
              templateUrl: 'Content/AngularJS/View/run.html',
              controller: 'runController'
          })
          .when('/tri', {
              templateUrl: 'Content/AngularJS/View/tri.html',
              controller: 'triController'
          })
          .when('/instagram', {
              templateUrl: 'Content/AngularJS/View/instagram.html',
              controller: 'instagramController'
          }).
            otherwise({
                redirectTo: '/intro'
            });

      $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

  }]);
