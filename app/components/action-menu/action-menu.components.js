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

        vm.actived = false;

        function onClick_activeMenu() {
            if(!vm.actived) {
                document.getElementById('ActionMenu').style.transform = "rotate(45deg)";
                document.getElementById('BtnCreateTask').style.bottom = "140px";
                document.getElementById('BtnCreateGoal').style.bottom = "90px";
                vm.actived = true;
            }else{
                document.getElementById('ActionMenu').style.transform = "rotate(0deg)";
                document.getElementById('BtnCreateTask').style.bottom = "32px";
                document.getElementById('BtnCreateGoal').style.bottom = "32px";
                vm.actived = false;
            }

        }
    }
})();