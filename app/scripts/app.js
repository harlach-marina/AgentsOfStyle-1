'use strict';

/**
 * @ngdoc overview
 * @name agentsOfStyleApp
 * @description
 * # agentsOfStyleApp
 *
 * Main module of the application.
 */
angular
  .module('agentsOfStyleApp', ['ionic']);
var PhoneGapInit = function () {
  this.boot = function () {
    angular.bootstrap(document, ['agentsOfStyleApp']);
  };

  if (window.phonegap !== undefined) {
    document.addEventListener('deviceready', function() {
      this.boot();
    });
  } else {
    console.log('PhoneGap not found, booting Angular manually');
    this.boot();
  }
};

angular.element(document).ready(function() {
  new PhoneGapInit();
});
