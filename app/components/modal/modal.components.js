(function() {
    'use strict';

    angular
        .module('app.modal')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$state', 'serviceMask'];

    /* @ngInject */

    function ModalController($state, serviceMask) {
        const vm = this;
        //const auth = firebase.auth();
        const db = firebase.firestore();

        //vm.taskName = undefined;
        vm.goalView = false;
        vm.dateError = 0;
        vm.userUid = JSON.parse(localStorage.getItem("user-info")).uid;
        vm.getCreate = document.querySelectorAll(`div#Modal > div.modal > div.create-container`);
        vm.getFilter = document.querySelectorAll(`div#Modal > div.modal > div.filter-container`);
        vm.getGoal = document.querySelectorAll(`div#Modal > div.modal > div.goal-container`);

        vm.onActive_MaskDate = onActive_MaskDate;
        vm.onClick_CreateTask = onClick_CreateTask;
        vm.onClick_closeModal = onClick_closeModal;
        vm.onClick_changeView = onClick_changeView;

        console.log(vm.userUid);

        function onClick_CreateTask() {
            let tagsArray = vm.tagsTask.split(" "),
                date = new Date(vm.dateTask),
                task = {
                name: vm.nameTask,
                tags: tagsArray,
                date: date
            };

            console.log(task);
            //db.collection(`${vm.userUid}/`).doc().set(task);
        }

        function onActive_MaskDate(x) {
            let dateValidated = serviceMask.dateDay(x);
            console.log(dateValidated);

            vm.dateError = dateValidated.error;
            vm.dateTask = dateValidated.fullDate;
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