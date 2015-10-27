teamApp.controller('introController', ['$scope', '$routeParams', '$location', 'instagram',
 function introController($scope, $routeParams, $location, instagram) {

     $scope.go = function (path) {
         $location.path(path);
     };

 }]);