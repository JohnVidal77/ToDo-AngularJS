(function () {
    angular
        .module('app.dashboard')
        .config(DashboardRoute);

    DashboardRoute.$inject = ['$stateProvider'];

    function DashboardRoute($stateProvider) {
        $stateProvider.state('dashboard', {
            url: '/dashboard',
            views: {
                '': {
                    templateUrl: "dashboard/dashboard.tmp.html",
                    controller: 'DashboardController',
                    controllerAs: 'vm'
                },

                'navbar@dashboard': {
                    templateUrl: "components/navbar/navbar.html",
                    controller: 'NavbarController',
                    controllerAs: 'vm'
                },

                'actionMenu@dashboard': {
                    templateUrl: "components/action-menu/action-menu.html",
                    controller: 'ActionMenuController',
                    controllerAs: 'vm'
                },

                'modal@dashboard': {
                    templateUrl: "components/modal/modal.html",
                    controller: 'ModalController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})();