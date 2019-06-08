(function(){
     'use strict';
     
     angular
         .module('app.dashboard')
         .controller('DashboardController', DashboardController);
         
     DashboardController.$inject = ['$state'];
     
     /* @ngInject */
     
     function DashboardController($state){
         const vm = this;

         let tasks = {
             today: [
                 {name: 'task 1', completed: false},
                 {name: 'task 2', completed: true},
                 {name: 'task 3', completed: false}
             ],
             tomorrow: [
                 {name: 'task 1', completed: false},
                 {name: 'task 2', completed: true},
                 {name: 'task 3', completed: false},
                 {name: 'task 2', completed: true},
                 {name: 'task 2', completed: true},
                 {name: 'task 2', completed: true},
                 {name: 'task 2', completed: true},
             ],
             month: [
                 {name: 'task 1', completed: false},
                 {name: 'task 2', completed: true},
                 {name: 'task 3', completed: false},
                 {name: 'task 2', completed: true},
                 {name: 'task 2', completed: true},
                 {name: 'task 2', completed: true},
                 {name: 'task 2', completed: true},
                 {name: 'task 2', completed: true},
             ]
         }

         vm.tasks = tasks

         vm.onClick_openModal = onClick_openModal;

         function onClick_openModal(typeModal) {
             const getTypeModal = document.querySelectorAll(
                 `div#Modal > div.modal > div.${typeModal}`
             );
             document.getElementById('Modal').style.display = 'flex';
             getTypeModal[0].style.display = 'block';

             if(typeModal === 'filter-container'){
                 document.getElementById('Switch-forms').style.display = 'none';
             }else{
                 document.getElementById('Switch-forms').style.display = '';
             }
         }
     }
 })();