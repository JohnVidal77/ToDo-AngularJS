(function(){
    'use strict';

    angular
        .module('app.navbar')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state', 'serviceRoute'];

    /* @ngInject */

    function NavbarController($state, serviceRoute){
        const vm = this;

        vm.currentState = $state.current.url;
        console.log(window.__env);

        vm.onClick_ChangeRoute = () => serviceRoute.changeRoute(sessionStorage.getItem('last-state'));
        vm.openNav = openNav;
        vm.closeSide = closeSide;

        function openNav() {
            document.getElementById("Sidenav").style.left = "0";
        }

        function closeSide() {
            document.getElementById("Sidenav").style.left = "-26%";
        }
    }
})();