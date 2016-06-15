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
  .module('agentsOfStyleApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/main.html',
    //controller: 'mainCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'views/home.html',
        //controller: 'homeCtrl'
      }
    }
  })

  .state('app.stylist', {
      url: '/stylist',
      views: {
        'menuContent': {
          templateUrl: 'views/stylist.html',
          //controller: 'stylistCtrl'
        }
      }
    })
    .state('app.outfits', {
      url: '/outfits',
      views: {
        'menuContent': {
          templateUrl: 'views/outfits.html',
          //controller: 'outfitsCtrl'
        }
      }
    })

    .state('app.account', {
      url: '/account',
      views: {
        'menuContent': {
          templateUrl: 'views/account.html',
          //controller: 'outfitsCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
