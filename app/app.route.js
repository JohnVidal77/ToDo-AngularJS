(function () {
    angular
        .module('app')
        .config(AppRoute);

    AppRoute.$inject = ['$urlRouterProvider', 'toastrConfig'];

    function AppRoute($urlRouterProvider, toastrConfig) {
        $urlRouterProvider.otherwise('/login');

        angular.extend(toastrConfig, {
            autoDismiss: false,
            containerId: 'toast-container',
            maxOpened: 3,
            newestOnTop: true,
            positionClass: 'toast-top-full-width',
            preventDuplicates: true,
            preventOpenDuplicates: false,
            target: 'body'
        });
    }
})();