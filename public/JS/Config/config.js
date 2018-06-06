"use strict";

angular
  .module("SCApp")
  .config(($routeProvider) => {
    $routeProvider
      .when("/cart", {
        template: `<cart></cart>`
      })
  });