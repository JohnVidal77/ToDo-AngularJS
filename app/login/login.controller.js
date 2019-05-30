(function(){
     'use strict';
     
     angular
         .module('app.login')
         .controller('LoginController', LoginController);
         
     LoginController.$inject = ['serviceRoute'];
     
     /* @ngInject */
     
     function LoginController(serviceRoute){
         const vm = this;

         vm.logoUrl = "assets/logo/logo-orange.svg";

         vm.onClick_login = onClick_login;
         vm.onClick_ChangeRoute = serviceRoute.changeRoute;

         function onClick_login() {
             if(!vm.emailLogin && !vm.passwordLogin){
                 return alert('Insira os dados')
             }

             serviceRoute.changeRoute('dashboard');
             console.log("Success on login");
         }
     }
 })();