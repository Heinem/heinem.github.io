teamApp.factory('instagram', ['$http', function ($http) {
      var service = {};
      service.getInstagramImg = function () {
          return $http.jsonp('https://api.instagram.com/v1/tags/ulriken/media/recent?client_id=a5ab564e13034caea31ed5284e2624d2&callback=JSON_CALLBACK');
      };
      return service;
  }]);