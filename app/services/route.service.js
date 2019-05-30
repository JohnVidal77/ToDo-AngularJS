(function () {
    angular
        .module('app.services')
        .service('serviceRoute', serviceRoute);

    serviceRoute.$inject = ['$state'];

    function serviceRoute($state) {
        const vm = this;

        vm.changeRoute = changeRoute;

        function changeRoute(stateName) {
            sessionStorage.setItem('last-state', $state.current.name);

            $state.go(stateName);
        }

        return vm;
    };
})();