(function(){
     'use strict';
     
     angular
         .module('app.forgotPassword')
         .controller('ForgotPasswordController', ForgotPasswordController);

    ForgotPasswordController.$inject = ['toastr', '$state'];
     
     /* @ngInject */
     
     function ForgotPasswordController(toastr, $state){
         const vm = this;

         vm.logoUrl = window.__env.currentLogo;
         vm.loading = document.getElementById('Loading');

         vm.sendEmail = sendEmail;

         function sendEmail() {
             vm.loading.style.display = 'flex';

             if(!vm.emailForgot){
                 vm.loading.style.display = 'none';
                 return toastr.error('Enter your credentials', 'Error');
             }

             firebase.auth().sendPasswordResetEmail(vm.emailForgot)
                 .then(function() {
                     vm.loading.style.display = 'none';
                     toastr.success('Check your Mail to reset your password', 'Success');
                     setTimeout(() => {$state.go('login')}, 3000)
             })
                 .catch(function(error) {
                     vm.loading.style.display = 'none';

                     if(error.code === 'auth/user-not-found') {
                         toastr.error(error.message, 'Error');
                         console.log(error)
                     }
             });
         }
     }
 })();