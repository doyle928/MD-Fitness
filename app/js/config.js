(function() {
  angular.module("app").config(function($routeProvider) {
    $routeProvider
      .when("/home", {
        template: "<home></home>"
      })
      .otherwise({ redirectTo: "/home" });
  });
})();
