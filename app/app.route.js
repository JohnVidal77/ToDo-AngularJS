(function () {
    console.log('route working');

    angular
        .module('app')
        .config(AppRoute);

    AppRoute.$inject = ['$urlRouterProvider'];

    function AppRoute($urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
    }
})();