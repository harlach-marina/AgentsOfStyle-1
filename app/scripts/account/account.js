'use strict';

angular.
	module('accountModule', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
  .state('app.account.balance', {
    url: '/balance',
    views: {
      'balance-tab': {
        templateUrl: 'views/account/balance.html',
        controller: 'balanceCtrl'
      }
    }
  })
  .state('app.account.budget', {
    url: '/budget',
    views: {
      'budget-tab': {
        templateUrl: 'views/account/budget.html',
        controller: 'budgetCtrl'
      }
    }
  })
  .state('app.account.about', {
    url: '/about',
    views: {
      'about-tab': {
        templateUrl: 'views/account/about.html',
        controller: 'aboutCtrl'
      }
    }
  })
  .state('app.account.delivery', {
    url: '/delivery',
    views: {
      'delivery-tab': {
        templateUrl: 'views/account/delivery.html',
        controller: 'deliveryCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('app/account/balance');
})

.controller('accountCtrl', function ($scope, $ionicTabsDelegate) {	   
})
.controller('balanceCtrl', function ($scope) {
	$scope.title = "Balance"; 	   
})
.controller('budgetCtrl', function ($scope) {
 	$scope.title = "Budget"; 	  

  $scope.shopper = {
    budget : 150,
    budgetFrequency : 'special occasion'
  };

  $scope.saveData = function(){
    console.log(JSON.stringify($scope.shopper, null, 2));
  }
})
.controller('aboutCtrl', function ($scope) {
	$scope.title = "About";	     
})
.controller('deliveryCtrl', function ($scope) {
 	$scope.title = "Delivery";   
});