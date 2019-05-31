(function(){
     'use strict';
     
     angular
         .module('app.forgotPassword')
         .controller('ForgotPasswordController', ForgotPasswordController);

    ForgotPasswordController.$inject = [];
     
     /* @ngInject */
     
     function ForgotPasswordController(){
         const vm = this;

         vm.logoUrl = window.__env.currentLogo;
     }
 })();