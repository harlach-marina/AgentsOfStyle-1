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
  .module('agentsOfStyleApp', [
    'ionic',
    'accountModule',
    'shopper.controllers',
    'registration'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    templateUrl: 'views/app.html',
    controller: 'appCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'content': {
        templateUrl: 'views/home.html',
        controller: 'appCtrl'
      }
    }
  })

  .state('app.login', {
    url: '/login',
    views: {
      'content': {
        templateUrl: 'views/fb-login.html',
        controller: 'appCtrl'
      }
    }
  })

  .state('app.sign-up', {
    url: '/sign-up',
    views: {
      'content': {
        templateUrl: 'views/registration.html',
        controller: 'registrationCtrl'
      }
    }
  })

  .state('app.user', {
    url: '/user',
    views: {
      'content': {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      }
    }
  })

  .state('app.user.shopper-home', {
    url: '/shopper-home',
    views: {
      'menuContent': {
        templateUrl: 'views/shopper/shopper-home.html',
        controller: 'shopperHomeCtrl'
      }
    }
  })

  .state('app.user.shopper-stylist', {
      url: '/shopper-stylist',
      views: {
        'menuContent': {
          templateUrl: 'views/shopper/shopper-stylist.html',
          controller: 'shopperStylistCtrl'
        }
      }
    })
    .state('app.user.shopper-outfits', {
      url: '/shopper-outfits',
      views: {
        'menuContent': {
          templateUrl: 'views/shopper/shopper-outfits.html',
          controller: 'shopperOutfitsCtrl'
        }
      }
    })
    .state('app.user.shopper-account', {
      url: '/shopper-account',
      views: {
        'menuContent': {
          templateUrl: 'views/shopper/shopper-account.html',
          controller: 'shopperAccountCtrl'
        }
      }
    })

    .state('app.user.shopper-new-outfit', {
      url: '/shopper-new-outfit',
      views: {
        'menuContent': {
          templateUrl: 'views/shopper/shopper-new-outfit.html',
          controller: 'shopperNewOutfitCtrl'
        }
      }
    })

    .state('app.user.shopper-change-stylist', {
      url: '/shopper-change-stylist',
      views: {
        'menuContent': {
          templateUrl: 'views/shopper/shopper-change-stylist.html',
          controller: 'shopperChangeStylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})

.controller('appCtrl', function ($scope, $state) {
  $scope.startApp = function(){
    $state.go('app.login');
  }  
});
