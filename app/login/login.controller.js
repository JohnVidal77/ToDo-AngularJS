(function(){
     'use strict';
     
     angular
         .module('app.login')
         .controller('LoginController', LoginController);
         
     LoginController.$inject = ['serviceRoute', 'toastr'];
     
     /* @ngInject */
     
     function LoginController(serviceRoute, toastr){
         const vm = this;

         vm.logoUrl = window.__env.currentLogo;
         vm.loading = document.getElementById('Loading');

         vm.onClick_login = onClick_login;
         vm.onClick_ChangeRoute = serviceRoute.changeRoute;

         function onClick_login() {
             vm.loading.style.display = 'flex';

             if(!vm.emailLogin && !vm.passwordLogin){
                 vm.loading.style.display = 'none';
                 return toastr.error('Enter your credentials', 'Error');
             }

             firebase.auth().signInWithEmailAndPassword(vm.emailLogin, vm.passwordLogin)
                 .then(cred => {
                     vm.loading.style.display = 'none';
                     serviceRoute.changeRoute('dashboard');

                     console.log(cred);
                     localStorage.setItem('user-cred', JSON.stringify(cred));
                 })
                 .catch(function(error) {
                     vm.loading.style.display = 'none';
                     let errorCode = error.code;

                     if(errorCode === 'auth/wrong-password') {
                         toastr.error('Wrong Password', 'Error');
                         //senha errada
                     }

                     if(errorCode === 'auth/user-not-found') {
                         toastr.error('User not found', 'Error');
                         //user not found
                     }
                 });
         }
     }
 })();