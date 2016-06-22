'use strict';
angular
	.module('registration', ['ionic', 'ngAnimate'])

	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider

		.state('app.sign-up-shopper', {
		    url: '/sign-up-shopper',
		    views: {
		      'content': {
		        templateUrl: 'views/user-reg.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-shopper.question1', {
		    url: '/question1',
		    views: {
		      'questions': {
		        templateUrl: 'views/shopper-questions/question01.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-shopper.question2', {
		    url: '/question2',
		    views: {
		      'questions': {
		        templateUrl: 'views/shopper-questions/question02.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-shopper.question3', {
		    url: '/question3',
		    views: {
		      'questions': {
		        templateUrl: 'views/shopper-questions/question03.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-shopper.question4', {
		    url: '/question4',
		    views: {
		      'questions': {
		        templateUrl: 'views/shopper-questions/question04.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-shopper.question5', {
		    url: '/question5',
		    views: {
		      'questions': {
		        templateUrl: 'views/shopper-questions/question05.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-shopper.question6', {
		    url: '/question6',
		    views: {
		      'questions': {
		        templateUrl: 'views/shopper-questions/question06.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-stylist', {
		    url: '/sign-up-stylist',
		    views: {
		      'content': {
		        templateUrl: 'views/user-reg.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-stylist.question1', {
		    url: '/question1',
		    views: {
		      'questions': {
		        templateUrl: 'views/stylist-questions/question01.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-stylist.question2', {
		    url: '/question2',
		    views: {
		      'questions': {
		        templateUrl: 'views/stylist-questions/question02.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-stylist.question3', {
		    url: '/question3',
		    views: {
		      'questions': {
		        templateUrl: 'views/stylist-questions/question03.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

	})
	
	.controller('registrationCtrl', function ($scope, $state, $ionicHistory) {
	  	$scope.startRegistration = function(){
	  		console.log($scope.currentQuestion);
	  		$scope.currentQuestion = 1;
	  		var regState = ($scope.role.type == 'shopper') ? 'app.sign-up-shopper.question1' : 'app.sign-up-stylist.question1';
	    	$state.go(regState);	
	  	}
	  	
	  	$scope.currentQuestion = 1;
	  	$scope.answers = {}
	  	$scope.showPrevQuestion = function(){
	  		$ionicHistory.goBack();
	  		$scope.currentQuestion--;
	  	}

	  	$scope.accept = function(){
	  		//Sending data
	  		$scope.answers['question' + $scope.currentQuestion] = true;
	  		$scope.currentQuestion++;
	  		console.log($scope.answers);
	  	}

	  	$scope.refuse = function(){
	  		//Sending data
	  		$scope.answers['question' + $scope.currentQuestion] = false;
	  		$scope.currentQuestion++;
	  		console.log($scope.answers);
	  	}

	  	//Question 5 - Budget 
	  	$scope.displayHint = true;
	  	$scope.closeHint = function(){
	  		$scope.displayHint = false;
	  	}
	  	$scope.shopper = {
		    budget : 150,
		    budgetFrequency : 'special occasion'
		};
	});