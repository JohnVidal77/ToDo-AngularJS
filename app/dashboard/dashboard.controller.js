(function(){
     'use strict';
     
     angular
         .module('app.dashboard')
         .controller('DashboardController', DashboardController);
         
     DashboardController.$inject = ['$state'];
     
     /* @ngInject */
     
     function DashboardController($state){
         const vm = this;
     }
 })();