(function() {
  angular.module("app").config(function($routeProvider) {
    $routeProvider
      .when("/home", {
        template: "<home></home>"
      })
      .when("/contact", {
        template: "<contact></contact>"
      })
      .otherwise({ redirectTo: "/home" });
  });
})();
