(function(){
     'use strict';
     
     angular
         .module('app.register')
         .controller('RegisterController', RegisterController);
         
     RegisterController.$inject = ['toastr'];
     
     /* @ngInject */
     
     function RegisterController(toastr){
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
                return toastr.error('Missing Name', 'Error');
            }

            if(!userInfo.email) {
                vm.formValid = false;
                vm.loading.style.display = 'none';
                return toastr.error('Missing Email', 'Error');
            }

            if(!userInfo.password) {
                vm.formValid = false;
                vm.loading.style.display = 'none';
                return toastr.error('Missing Password', 'Error');
            }

            firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
                .then(cred => {
                    vm.loading.style.display = 'none';
                    console.log(cred);
                })
                .catch(error => {
                    vm.loading.style.display = 'none';

                    if(error.code === 'auth/email-already-in-use') {
                        toastr.error('Email already in use', 'Error');
                    }
                });
        }
     }
 })();