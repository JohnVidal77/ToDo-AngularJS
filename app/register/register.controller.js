(function(){
     'use strict';
     
     angular
         .module('app.register')
         .controller('RegisterController', RegisterController);
         
     RegisterController.$inject = ['toastr', '$state'];
     
     /* @ngInject */
     
     function RegisterController(toastr, $state){
         const vm = this;
         const auth = firebase.auth();
         const db = firebase.firestore();

         vm.logoUrl = window.__env.currentLogo;
         vm.loading = document.getElementById('Loading');
         vm.formValid = true;

         vm.onClick_createUser = onClick_createUser;
         vm.onCall_saveUserInfo = onCall_saveUserInfo;

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

            auth.createUserWithEmailAndPassword(userInfo.email, userInfo.password)
                .then(cred => {
                    vm.loading.style.display = 'none';

                    vm.onCall_saveUserInfo(cred.user.uid);
                    $state.go('dashboard')
                })
                .catch(error => {
                    vm.loading.style.display = 'none';

                    if(error.code === 'auth/email-already-in-use') {
                        toastr.error('Email already in use', 'Error');
                    }
                });
        }

        function onCall_saveUserInfo(userid) {
            let userInfo = {
                name: vm.nameRegister,
                email: vm.emailRegister,
                uid: userid,
                imgUrl: ''
            };

            db.collection("users").add(userInfo)
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
        }
     }
 })();