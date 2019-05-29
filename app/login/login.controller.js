(function(){
     'use strict';
     
     angular
         .module('app.login')
         .controller('LoginController', LoginController);
         
     LoginController.$inject = [];
     
     /* @ngInject */
     
     function LoginController(){
         const vm = this;

         vm.logoUrl = "assets/logo/logo-orange.svg";

         vm.onClick_login = onClick_login;

         function onClick_login() {
             if(!vm.emailLogin){
                 return
             }

             if(!vm.passwordLogin){
                 return
             }

             console.log("Success on login");
         }
     }
 })();