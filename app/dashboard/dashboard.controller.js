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
     }
 })();