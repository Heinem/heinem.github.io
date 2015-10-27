teamApp.controller('instagramController', ['$scope', '$routeParams', 'instagram',
 function instagramController($scope, $routeParams, instagram) {

     instagram.getInstagramImg().success(function (data) {
         $scope.pics = data.data;
     });

 }]);