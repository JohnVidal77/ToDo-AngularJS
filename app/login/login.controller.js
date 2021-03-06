(function(){
     'use strict';
     
     angular
         .module('app.login')
         .controller('LoginController', LoginController);
         
     LoginController.$inject = ['serviceRoute', 'toastr'];
     
     /* @ngInject */
     
     function LoginController(serviceRoute, toastr){
         const vm = this;
         const auth = firebase.auth();
         const db = firebase.firestore();

         vm.logoUrl = window.__env.currentLogo;
         vm.loading = document.getElementById('Loading');

         vm.onClick_login = onClick_login;
         vm.onClick_ChangeRoute = serviceRoute.changeRoute;
         vm.onCall_getUserInfo = onCall_getUserInfo;

         function onClick_login() {
             vm.loading.style.display = 'flex';

             if(!vm.emailLogin && !vm.passwordLogin){
                 vm.loading.style.display = 'none';
                 return toastr.error('Enter your credentials', 'Error');
             }

             auth.signInWithEmailAndPassword(vm.emailLogin, vm.passwordLogin)
                 .then(cred => {
                     vm.onCall_getUserInfo(cred.user.uid);
                     // console.log(cred);
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

         function onCall_getUserInfo(userId) {
             let docRef = db.collection("users");

             docRef.where("uid", "==", userId)
                 .get()
                 .then(function(querySnapshot) {
                     querySnapshot.forEach(function(doc) {
                         vm.loading.style.display = 'none';
                         serviceRoute.changeRoute('dashboard');

                         localStorage.setItem('user-info', JSON.stringify(doc.data()));
                     });
                 })
                 .catch(function(error) {
                     console.log("Error getting documents: ", error);
                 });
         }
     }
 })();