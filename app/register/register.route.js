(function () {
    angular
        .module('app.register')
        .config(RegisterRoute);

    RegisterRoute.$inject = ['$stateProvider'];

    function RegisterRoute($stateProvider) {
        $stateProvider.state('register', {
            url: '/register',
            templateUrl: "register/register.tmp.html",
            controller: 'RegisterController',
            controllerAs: 'vm'
        })
    }
})();