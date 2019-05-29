(function () {
    angular
        .module('app.forgotPassword')
        .config(ForgotPasswordRoute);

    ForgotPasswordRoute.$inject = ['$stateProvider'];

    function ForgotPasswordRoute($stateProvider) {
        $stateProvider.state('forgot-password', {
            name: 'forgot-password',
            url: '/forgot-password',
            templateUrl: "forgot-password/forgot-password.tmp.html",
            controller: 'ForgotPasswordController',
            controllerAs: 'vm'
        })
    }
})();