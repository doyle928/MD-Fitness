(function() {
  var home = {
    templateUrl: "./partials/home.html",
    controller: function($location) {
      const $ctrl = this;
      // $ctrl.home = function() {
      //   $location.path("/home");
      // };
      // $ctrl.contact = function() {
      //   $location.path("/contact");
      // };
    }
  };

  angular.module("app").component("home", home);
})();
