(function() {
  angular
    .module("app", ["ngRoute"])
    .controller("mainController", function($scope, $location) {
      $scope.home = function() {
        $location.path("/home");
      };
      $scope.contact = function() {
        $location.path("/contact");
      };
      $scope.articles = function() {
        $location.path("/articles");
      };
    });
})();
