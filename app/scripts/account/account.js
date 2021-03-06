'use strict';

angular.
	module('accountModule', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
  .state('app.user.shopper-account.balance', {
    url: '/balance',
    views: {
      'balance-tab': {
        templateUrl: 'views/shopper/account/balance.html',
        controller: 'balanceCtrl'
      }
    }
  })
  .state('app.user.shopper-account.budget', {
    url: '/budget',
    views: {
      'budget-tab': {
        templateUrl: 'views/shopper/account/budget.html',
        controller: 'budgetCtrl'
      }
    }
  })
  .state('app.user.shopper-account.about', {
    url: '/about',
    views: {
      'about-tab': {
        templateUrl: 'views/shopper/account/about.html',
        controller: 'aboutCtrl'
      }
    }
  })
  .state('app.user.shopper-account.delivery', {
    url: '/delivery',
    views: {
      'delivery-tab': {
        templateUrl: 'views/shopper/account/delivery.html',
        controller: 'deliveryCtrl'
      }
    }
  });
})

.controller('shopperAccountCtrl', function ($scope, $ionicTabsDelegate) {	   
})
.controller('balanceCtrl', function ($scope) {
	$scope.title = "Balance";
      function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    var fromDate = randomDate(new Date(2016, 0, 1), new Date(2016, 6, 6));


  $scope.users = {
    balance: 232,

    money: [{
      expenses: 1,
      budget: 76,
      regDate: fromDate
    },
    {
      expenses: 22,
      budget: 777,
      regDate: new Date(fromDate).setMonth(fromDate.getMonth()+1)
    },
    {
      expenses: 10,
      budget: 80,
      regDate: new Date(fromDate).setMonth(fromDate.getMonth()+2)
    },
    {
      expenses: 160,
      budget: 380,
      regDate: new Date(fromDate).setMonth(fromDate.getMonth()+3)
    },
    {
      expenses: 710,
      budget: 8000,
      regDate: new Date(fromDate).setMonth(fromDate.getMonth()+4)
    }],
    // expenses: [1, 22, 10],
    // budget: [76, 777, 80]
  }; 
})
.controller('budgetCtrl', function ($scope) {

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
  $scope.editButtonVal = "Edit";
  $scope.edit = false;
  $scope.editable = function() {
    $scope.edit = !$scope.edit;
    $scope.editButtonVal = "Save";
    return false;
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