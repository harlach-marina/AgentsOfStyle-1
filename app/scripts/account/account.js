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
})
.controller('aboutCtrl', function ($scope) {
	$scope.title = "About";	 
  $scope.users = [{
    name: "Jane",
    secondname: "Jackson",
    email: "jj@icloud.ccom",
    date: "3/28/1984",
    age: 32,
    phone: "0031 (0) 45 750 720 8",
    height: 170,
    weight: 55,
    hip: 90,
    waist: 60,
    head: 50,
    bra: 89,
    prefer: "urban, casual"
  }];    
})
.controller('deliveryCtrl', function ($scope) {
 	$scope.title = "Delivery";   
});