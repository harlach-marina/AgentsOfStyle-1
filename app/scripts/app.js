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
    'newVisitors'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/main.html',
    controller: 'mainCtrl'
  })
  // .state('registration', {
  //   url: '/registration',
  //   abstract: true,
  //   templateUrl: 'views/registration.html',
  //   controller: 'registrationCtrl'
  // })
  // .state('registration.question01', {
  //   url: '/question01',
  //   views: {
  //     'registrationContent': {
  //       templateUrl: 'views/question01.html',
  //       controller: 'questionsCtrl'
  //     }
  //   }
  // });
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('app.stylist', {
      url: '/stylist',
      views: {
        'menuContent': {
          templateUrl: 'views/stylist.html',
          controller: 'stylistCtrl'
        }
      }
    })
    .state('app.outfits', {
      url: '/outfits',
      views: {
        'menuContent': {
          templateUrl: 'views/outfits.html',
          controller: 'outfitsCtrl'
        }
      }
    })
    .state('app.account', {
      url: '/account',
      views: {
        'menuContent': {
          templateUrl: 'views/account.html',
          controller: 'accountCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
