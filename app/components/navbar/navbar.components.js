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
        vm.useInfo = undefined;
        console.log(window.__env);

        vm.oninit = oninit;
        vm.onClick_ChangeRoute = () => serviceRoute.changeRoute(sessionStorage.getItem('last-state'));
        vm.onClick_Logout = onClick_Logout;
        vm.openSide = openSide;
        vm.openNotification = openNotification;
        vm.closeSide = closeSide;
        vm.closeNotification = closeNotification;
        vm.showOverlay = showOverlay;
        vm.hideOverlay = hideOverlay;
        vm.closeAllOverlay = closeAllOverlay;

        vm.oninit();

        function oninit() {
            vm.useInfo = JSON.parse(localStorage.getItem('user-info'));
        }

        function onClick_Logout() {
            firebase.auth().signOut().then(function() {
                $state.go('login');
                localStorage.clear()
            }).catch(function(error) {
                console.log(error)
            });
        }

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