(function(){
    'use strict';

    angular
        .module('app.actionMenu')
        .controller('ActionMenuController', ActionMenuController);

    ActionMenuController.$inject = ['$state'];

    /* @ngInject */

    function ActionMenuController($state){
        const vm = this;

        vm.onClick_activeMenu = onClick_activeMenu;
        vm.onClick_openModal = onClick_openModal;
        vm.onActive_openMenu = onActive_openMenu;
        vm.onActive_closeMenu = onActive_closeMenu;

        vm.actived = false;

        function onClick_activeMenu() {
            if(!vm.actived) {
                vm.onActive_openMenu();
                setTimeout(function(){vm.onActive_closeMenu()}, 10000);
            }else{
                vm.onActive_closeMenu();
            }

        }

        function onClick_openModal(typeModal) {
            const getTypeModal = document.querySelectorAll(
                `div#Modal > div.modal > div.${typeModal}`
            );
            document.getElementById('Modal').style.display = 'flex';
            getTypeModal[0].style.display = 'block';
        }

        function onActive_openMenu() {
            document.getElementById('ActionMenu').style.transform = "rotate(45deg)";
            document.getElementById('BtnCreateTask').style.bottom = "140px";
            document.getElementById('BtnCreateGoal').style.bottom = "90px";
            document.getElementsByClassName('tooltip-action-menu')[0].style.width='100px';
            document.getElementsByClassName('tooltip-action-menu')[1].style.width='100px';
            vm.actived = true;
        }

        function onActive_closeMenu() {
            document.getElementsByClassName('tooltip-action-menu')[0].style.width='0';
            document.getElementsByClassName('tooltip-action-menu')[1].style.width='0';
            document.getElementById('ActionMenu').style.transform = "rotate(0deg)";
            document.getElementById('BtnCreateTask').style.bottom = "32px";
            document.getElementById('BtnCreateGoal').style.bottom = "32px";
            vm.actived = false;
        }
    }
})();