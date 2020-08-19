(() => {
    const app = angular.module('lexMod', ['ui.router']);
    app.constant("ENDPOINT", "http://localhost:3000/api/v1");
    app.config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .state('home', {
                abstract: true,
                url: '/home',
                templateUrl: 'templates/home.html'
            })
            .state('home.dashboard', {
                url: '/dashbaord',
                templateUrl: 'templates/dashboard.html',
                controller: 'HomeCtrl'
            })
            .state('home.addNew', {
                url: '/addNew',
                templateUrl: 'templates/add.html',
                controller: 'AddUserCtrl'
            })
    })

})();

