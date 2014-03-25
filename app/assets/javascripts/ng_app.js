var Template = angular.module('Template', ['ui.router', 'Helper']);

Template.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('main', {
        url: '/home',
        templateUrl: '/assets/app/main/main.html',
        controller: 'MainCtrl'
      });
}]);