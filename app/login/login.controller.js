(function(){
     'use strict';
     
     angular
         .module('app.login')
         .controller('LoginController', LoginController);
         
     LoginController.$inject = [];
     
     /* @ngInject */
     
     function LoginController(){
         const vm = this;

         vm.logoUrl = "https://media.wired.com/photos/5926838bcefba457b079a3ce/master/pass/slack-lead1.jpg";

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