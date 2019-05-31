(function(){
     'use strict';
     
     angular
         .module('app.register')
         .controller('RegisterController', RegisterController);
         
     RegisterController.$inject = [];
     
     /* @ngInject */
     
     function RegisterController(){
         const vm = this;

         vm.logoUrl = window.__env.currentLogo;
     }
 })();