(function () {
    angular
        .module('app.login')
        .config(LoginRoute);

    LoginRoute.$inject = ['$stateProvider'];

    function LoginRoute($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: "login/login.tmp.html",
            controller: 'LoginController',
            controllerAs: 'vm'
        })
    }
})();