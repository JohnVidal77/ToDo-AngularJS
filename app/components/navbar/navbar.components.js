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
        vm.openSide = openSide;
        vm.openNotification = openNotification;
        vm.closeSide = closeSide;
        vm.closeNotification = closeNotification;
        vm.showOverlay = showOverlay;
        vm.hideOverlay = hideOverlay;
        vm.closeAllOverlay = closeAllOverlay;

        function openSide() {
            document.getElementById("Sidenav").style.left = "0";
            vm.showOverlay();
        }

        function openNotification() {
            document.getElementById("Notification").style.right = "0";
            vm.showOverlay();
        }

        function closeSide() {
            document.getElementById("Sidenav").style.left = "-100%";
            vm.hideOverlay();
        }

        function closeNotification() {
            document.getElementById("Notification").style.right = "-100%";
            vm.hideOverlay();
        }

        function showOverlay() {
            document.getElementById("Overlay").style.top = "0";
            document.getElementById("Overlay").style.opacity = "0.5";
        }

        function hideOverlay() {
            document.getElementById("Overlay").style.top = "-100%";
            document.getElementById("Overlay").style.opacity = "0";
        }

        function closeAllOverlay() {
            vm.hideOverlay();
            document.getElementById("Notification").style.right = "-100%";
            document.getElementById("Sidenav").style.left = "-100%";
        }
    }
})();