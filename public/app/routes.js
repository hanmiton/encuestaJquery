angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){

	$routeProvider

	.when('/',{
		templateUrl: 'app/views/pages/poll.html'
	})

	.when('/about', {
		templateUrl: 'app/views/pages/about.html'
	})

	.when('/register',{
		templateUrl : 'app/views/polls/register.html'
	})

	.otherwise({ redirectTo: '/'});

	$locationProvider.html5Mode({
		enabled: true,
		requiredBase: false
	});
	
});