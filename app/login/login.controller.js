(function(){
     'use strict';
     
     angular
         .module('app.login')
         .controller('LoginController', LoginController);
         
     LoginController.$inject = ['serviceRoute'];
     
     /* @ngInject */
     
     function LoginController(serviceRoute){
         const vm = this;

         vm.logoUrl = window.__env.currentLogo;
         vm.loading = document.getElementById('Loading');

         vm.onClick_login = onClick_login;
         vm.onClick_ChangeRoute = serviceRoute.changeRoute;

         function onClick_login() {
             if(!vm.emailLogin && !vm.passwordLogin){
                 return alert('Insira os dados')
             }

             firebase.auth().signInWithEmailAndPassword(vm.emailLogin, vm.passwordLogin)
                 .then(cred => {
                     vm.loading.style.display = 'none';
                     serviceRoute.changeRoute('dashboard');

                     localStorage.setItem('user-cred', cred);
                 })
                 .catch(function(error) {
                     vm.loading.style.display = 'none';
                     let errorCode = error.code;

                     if(errorCode === 'auth/wrong-password') {
                         //senha errada
                     }

                     if(errorCode === 'auth/user-not-found') {
                         //user not found
                     }
                 });
         }
     }
 })();