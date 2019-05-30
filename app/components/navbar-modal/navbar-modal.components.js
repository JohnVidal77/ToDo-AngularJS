(function(){
    'use strict';

    angular
        .module('app.navbarModal')
        .controller('NavbarModalController', NavbarModalController);

    NavbarModalController.$inject = ['serviceRoute'];

    /* @ngInject */

    function NavbarModalController(serviceRoute){
        const vm = this;

        vm.onClick_ChangeRoute = () => serviceRoute.changeRoute(sessionStorage.getItem('last-state'));
    }
})();