(function(){
     'use strict';
     
     angular
         .module('app.dashboard')
         .controller('DashboardController', DashboardController);
         
     DashboardController.$inject = ['$state'];
     
     /* @ngInject */
     
     function DashboardController($state){
         const vm = this;

         vm.tasks = undefined;

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