(function() {
  var contact = {
    templateUrl: "./partials/contact.html",
    controller: function() {
      const $ctrl = this;
      $("#userName").on("focus", function() {
        $("#userName").css({
          color: "#616161",
          "background-color": "#fff",
          border: "2px rgb(240, 240, 240) solid"
        });
        $("p[data-id=name").css({ color: "darkblue" });
      });
      $("#userEmail").on("focus", function() {
        $("#userEmail").css({
          color: "#616161",
          "background-color": "#fff",
          border: "2px rgb(240, 240, 240) solid"
        });
        $("p[data-id=email").css({ color: "darkblue" });
      });
      $("#userMessage").on("focus", function() {
        $("#userMessage").css({
          color: "#616161",
          "background-color": "#fff",
          border: "2px rgb(240, 240, 240) solid"
        });
        $("p[data-id=message").css({ color: "darkblue" });
      });

      $("#userName").on("focusout", function() {
        $("#userName").css({
          color: "#ffa500",
          "background-color": "#fff",
          border: "2px #ffa500 solid"
        });
        $("p[data-id=name").css({ color: "#000" });
      });
      $("#userEmail").on("focusout", function() {
        $("#userEmail").css({
          color: "#ffa500",
          "background-color": "#fff",
          border: "2px #ffa500 solid"
        });
        $("p[data-id=email").css({ color: "#000" });
      });
      $("#userMessage").on("focusout", function() {
        $("#userMessage").css({
          color: "#ffa500",
          "background-color": "#fff",
          border: "2px #ffa500 solid"
        });
        $("p[data-id=message").css({ color: "#000" });
      });

      $(".formInput").on("keyup", function() {
        let userNameVal = $("#userName").val();
        let userEmailVal = $("#userEmail").val();
        let userMessageVal = $("#userMessage").val();

        if (userNameVal == "") {
          $("#userName").on("focusout", function() {
            $("#userName").css({
              color: "#ffa500",
              "background-color": "#fff",
              border: "2px #ffa500 solid"
            });
          });
        } else {
          $("#userName").on("focusout", function() {
            $("#userName").css({
              color: "#000",
              "background-color": "#FDFF7F",
              border: "2px #fff solid"
            });
          });
        }
        if (userEmailVal == "") {
          $("#userEmail").on("focusout", function() {
            $("#userEmail").css({
              color: "#ffa500",
              "background-color": "#fff",
              border: "2px #ffa500 solid"
            });
          });
        } else {
          $("#userEmail").on("focusout", function() {
            $("#userEmail").css({
              color: "#000",
              "background-color": "#FDFF7F",
              border: "2px #fff solid"
            });
          });
        }
        if (userMessageVal == "") {
          $("#userMessage").on("focusout", function() {
            $("#userMessage").css({
              color: "#ffa500",
              "background-color": "#fff",
              border: "2px #ffa500 solid"
            });
          });
        } else {
          $("#userMessage").on("focusout", function() {
            $("#userMessage").css({
              color: "#000",
              "background-color": "#FDFF7F",
              border: "2px #fff solid"
            });
          });
        }
        if (userNameVal != "" && userEmailVal != "" && userMessageVal != "") {
          $("#lock")
            .empty()
            .text("SEND");
        } else {
          $("#lock")
            .empty()
            .html('<i class="material-icons">lock_outline</i>');
        }
      });

      // $(".lockChange").on("keyup", function() {
      //     $ctrl.ccBoolean = {
      //       value: $scope.slider.value,
      //       ccnum1: false,
      //       ccnum2: false,
      //       ccnum3: false,
      //       ccnum4: false,
      //       ccname: false,
      //       exp1: false,
      //       exp2: false,
      //       ccCCV: false
      //     };
      //     var ccnum1Val = $(".ccnum1").val();
      //     var ccnum2Val = $(".ccnum2").val();
      //     var ccnum3Val = $(".ccnum3").val();
      //     var ccnum4Val = $(".ccnum4").val();
      //     var ccnameVal = $(".ccname").val();
      //     var ccexp1Val = $(".ccselect1").val();
      //     var ccexp2Val = $(".ccselect2").val();
      //     var ccvVal = $(".ccCCV").val();
      //     if (
      //       ccnum1Val.length == 4 &&
      //       ccnum2Val.length == 4 &&
      //       ccnum3Val.length == 4 &&
      //       ccnum4Val.length == 4 &&
      //       ccnameVal != "" &&
      //       ccexp1Val != "" &&
      //       ccexp2Val != "" &&
      //       ccvVal.length == 3
      //     ) {
      //       $ctrl.ccBoolean.ccnum1 = true;
      //       $ctrl.ccBoolean.ccnum2 = true;
      //       $ctrl.ccBoolean.ccnum3 = true;
      //       $ctrl.ccBoolean.ccnum4 = true;
      //       $ctrl.ccBoolean.ccname = true;
      //       $ctrl.ccBoolean.exp1 = true;
      //       $ctrl.ccBoolean.exp2 = true;
      //       $ctrl.ccBoolean.ccCCV = true;
      //     } else {
      //       $(".submitCC")
      //         .find("span")
      //         .empty()
      //         .html('<i class="material-icons">lock_outline</i>');
      //     }

      //     if (
      //       $ctrl.ccBoolean.value != 0 &&
      //       $ctrl.ccBoolean.ccnum1 == true &&
      //       $ctrl.ccBoolean.ccnum2 == true &&
      //       $ctrl.ccBoolean.ccnum3 == true &&
      //       $ctrl.ccBoolean.ccnum4 == true &&
      //       $ctrl.ccBoolean.ccname == true &&
      //       $ctrl.ccBoolean.exp1 == true &&
      //       $ctrl.ccBoolean.exp2 == true &&
      //       $ctrl.ccBoolean.ccCCV == true
      //     ) {
      //       $(".submitCC")
      //         .find("span")
      //         .empty();
      //     }
      //   });
    }
  };

  angular.module("app").component("contact", contact);
})();
