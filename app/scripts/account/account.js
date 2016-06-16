'use strict';

angular.
	module('accountModule', [])

.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
  .state('app.account.balance', {
    url: '/balance',
    templateUrl: 'views/account/balance.html',
    controller: 'balanceCtrl'
  })
  .state('app.account.budget', {
    url: '/budget',
    templateUrl: 'views/account/budget.html',
    controller: 'budgetCtrl'
  })
  .state('app.account.about', {
    url: '/about',
    templateUrl: 'views/account/about.html',
    controller: 'aboutCtrl'
  })
  .state('app.account.delivery', {
    url: '/delivery',
    templateUrl: 'views/account/delivery.html',
    controller: 'deliveryCtrl'
  });
  $urlRouterProvider.otherwise('app/account/balance');
})

.controller('accountCtrl', function ($scope) {
	$scope.tabs = [
		{name : "balance", icon : "ion-social-usd"},
		{name : "budget", icon : "ion-android-sunny"},
		{name : "about", icon : "ion-android-person"},
		{name : "delivery", icon : "ion-android-car"}
	];
	$scope.selectedIndex = 0;
	$scope.changeTab = function(index){
		$scope.selectedIndex = index;
	}	   
})
.controller('balanceCtrl', function ($scope) {
	$scope.title = "Balance"; 	   
})
.controller('budgetCtrl', function ($scope) {
 	$scope.title = "Budget"; 	  
})
.controller('aboutCtrl', function ($scope) {
	$scope.title = "About";	     
})
.controller('deliveryCtrl', function ($scope) {
 	$scope.title = "Delivery";   
});