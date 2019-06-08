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
         vm.loading = document.getElementById('Loading');
         vm.formValid = true;

         vm.onClick_createUser = onClick_createUser;

        function onClick_createUser() {
            let userInfo = {
                name: vm.nameRegister,
                email: vm.emailRegister,
                password: vm.passwordRegister
            };
            vm.formValid = true;
            vm.loading.style.display = 'flex';

            if(!userInfo.name) {
                vm.formValid = false;
                vm.loading.style.display = 'none';
                return console.log('Missing Name')
            }

            if(!userInfo.email) {
                vm.formValid = false;
                vm.loading.style.display = 'none';
                return console.log('Missing Email')
            }

            if(!userInfo.email) {
                vm.formValid = false;
                vm.loading.style.display = 'none';
                return console.log('Missing Password')
            }

            firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                vm.loading.style.display = 'none';

                return console.log(errorCode + errorMessage)
            });

            vm.loading.style.display = 'none';
        }
     }
 })();