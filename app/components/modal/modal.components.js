(function() {
    'use strict';

    angular
        .module('app.modal')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$state', 'serviceMask'];

    /* @ngInject */

    function ModalController($state, serviceMask) {
        const vm = this;

        //vm.taskName = undefined;
        vm.goalView = false;
        vm.getCreate = document.querySelectorAll(`div#Modal > div.modal > div.create-container`);
        vm.getFilter = document.querySelectorAll(`div#Modal > div.modal > div.filter-container`);
        vm.getGoal = document.querySelectorAll(`div#Modal > div.modal > div.goal-container`);

        vm.onActive_MaskDate = onActive_MaskDate;
        vm.onClick_CreateTask = onClick_CreateTask;
        vm.onClick_closeModal = onClick_closeModal;
        vm.onClick_changeView = onClick_changeView;

        function onClick_CreateTask() {

        }

        function onActive_MaskDate(x) {
            var y = serviceMask.dateDay(x);
            vm.dateTask = y;
        }

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