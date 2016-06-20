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
  $scope.users = {
    balance: 232,
    expenses: [1, 22, 10],
    budget: [76, 777, 80]
  }; 

  // function getNewArr(){
  //   return oldArr.map(function(item,index){
  //       item.full_name = [item.first_name,item.last_name].join(" ");
  //       return item;
  //   });
  // var oldArr = [{first_name:"Colin",last_name:"Toh"},{first_name:"Addy",last_name:"Osmani"},{first_name:"Yehuda",last_name:"Katz"}];

  // function getNewArr(){
        
  //   return oldArr.map(function(item,index){
  //       item.full_name = [item.first_name,item.last_name].join(" ");
  //       return item;
  //   });
    
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
    bra: 89
  }];
  $scope.show = function() {
    angular.element( document.querySelector('.append')).append('<img style="margin: 0 2px;" src="./images/212ba73869110c104d612b64a3f86c35.png">');
  };
  $scope.tg = false;
  $scope.editable = function() {
    $scope.tg = !$scope.tg;
    $scope.tr = true;
    console.log($scope.tg);
  } 
  // $scope.button_clicked = false;
  //   $scope.do_something = function() {
  //       alert("Clicked!");
  //       $scope.button_clicked = true;
  //       return false;
  //   };   
})
.controller('deliveryCtrl', function ($scope) {
 	$scope.title = "Delivery";   
});