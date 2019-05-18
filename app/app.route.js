(function () {
    angular
        .module('app')
        .config(AppRoute)
        .run(AppRun);

    AppRoute.$inject = ['$routeProvider', '$urlRouterProvider', '$locationProvider'];

    function AppRoute($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'HomeController'
            });

        $locationProvider.html5Mode(true);
    }
});