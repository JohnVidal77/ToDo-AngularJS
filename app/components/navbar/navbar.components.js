(function(){
    'use strict';

    angular
        .module('app.navbar')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['serviceRoute'];

    /* @ngInject */

    function NavbarController(serviceRoute){
        const vm = this;

        vm.onClick_ChangeRoute = () => serviceRoute.changeRoute(sessionStorage.getItem('last-state'));
    }
})();