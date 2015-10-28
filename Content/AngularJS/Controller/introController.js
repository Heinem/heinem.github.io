teamApp.controller('introController', ['$scope', '$routeParams', '$location', 'instagram',
 function introController($scope, $routeParams, $location, instagram) {

     $scope.teamRunaway = "TEAM RUNAWAY";
     
     $scope.go = function (path) {
         $location.path(path);
     };

     $scope.showInstagram = function() {
         $scope.instagram = true;
         $scope.instaClass = "insta-hover";
         console.log = "Inn";
         $scope.teamRunaway = "#TeamRunawayNorway";

     };

     $scope.hideInstagram = function () {
         $scope.instagram = false;
         $scope.instaClass = "";
         console.log = "out";
         $scope.teamRunaway = "TEAM RUNAWAY";

     };

     instagram.getInstagramImg().success(function (data) {
         $scope.pics = data.data;
     });
 }]);