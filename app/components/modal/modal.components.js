(function() {
    'use strict';

    angular
        .module('app.modal')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$state'];

    /* @ngInject */

    function ModalController($state) {
        const vm = this;

        vm.goalView = false;
        vm.getCreate = document.querySelectorAll(`div#Modal > div.modal > div.create-container`);
        vm.getFilter = document.querySelectorAll(`div#Modal > div.modal > div.filter-container`);
        vm.getGoal = document.querySelectorAll(`div#Modal > div.modal > div.goal-container`);

        vm.onClick_closeModal = onClick_closeModal;
        vm.onClick_changeView = onClick_changeView;

        console.log(vm.filterActive);

        function onClick_closeModal() {
            document.getElementById('Modal').style.display = 'none';
            vm.getCreate[0].style.display = 'none';
            vm.getFilter[0].style.display = 'none';
            vm.getGoal[0].style.display = 'none';
            sessionStorage.clear()
        }

        function onClick_changeView() {
            if(vm.goalView){
                vm.getCreate[0].style.display = 'none';
                vm.getGoal[0].style.display = 'block';
            }else{
                vm.getCreate[0].style.display = 'block';
                vm.getGoal[0].style.display = 'none';
            }
        }
    }
})();