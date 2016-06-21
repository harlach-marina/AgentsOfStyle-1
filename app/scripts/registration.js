'use strict';
angular
	.module('registration', ['ionic'])

	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider

		.state('app.sign-up-user', {
		    url: '/sign-up-user',
		    views: {
		      'content': {
		        templateUrl: 'views/user-reg.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-user.question1', {
		    url: '/question1',
		    views: {
		      'questions': {
		        templateUrl: 'views/user-questions/question01.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-user.question2', {
		    url: '/question2',
		    views: {
		      'questions': {
		        templateUrl: 'views/user-questions/question02.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-user.question3', {
		    url: '/question3',
		    views: {
		      'questions': {
		        templateUrl: 'views/user-questions/question03.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-user.question4', {
		    url: '/question4',
		    views: {
		      'questions': {
		        templateUrl: 'views/user-questions/question04.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

		.state('app.sign-up-user.question5', {
		    url: '/question5',
		    views: {
		      'questions': {
		        templateUrl: 'views/user-questions/question05.html',
		        controller: 'registrationCtrl'
		      }
		    }
		})

	})
	
	.controller('registrationCtrl', function ($scope, $state, $ionicHistory) {
	  	$scope.startRegistration = function(){
	    	$state.go('app.sign-up-user.question1');
	  	}

	  	$scope.currentQuestion = 1;

	  	$scope.showPrevQuestion = function(){
	  		$ionicHistory.goBack();
	  		$scope.currentQuestion--;
	  	}

	  	$scope.accept = function(){
	  		//Sending data
	  		$scope.currentQuestion++;
	  	}

	  	$scope.refuse = function(){
	  		//Sending data
	  		$scope.currentQuestion++;
	  	}
	});