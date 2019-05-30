(function () {
    angular
        .module('app.register')
        .config(RegisterRoute);

    RegisterRoute.$inject = ['$stateProvider'];

    function RegisterRoute($stateProvider) {
        $stateProvider.state('register', {
            url: '/register',
            views: {
                '': {
                    templateUrl: "register/register.tmp.html",
                    controller: 'RegisterController',
                    controllerAs: 'vm'
                },

                'navbar-modal@register': {
                    templateUrl: "components/navbar-modal/navbar-modal.html",
                    controller: 'NavbarModalController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})();